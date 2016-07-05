/*
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

package main

import (
	"errors"
	"fmt"
	"bytes"
	
	"hyperledger/ccs"
	"hyperledger/cci/appinit"
	"hyperledger/cci/trial-chain/chaincode/record"

	"github.com/golang/protobuf/proto"
	"github.com/hyperledger/fabric/core/chaincode/shim"
)

const (
	owner = "owner"
	recordHash = "recordHash"
	authorizedTrials = "authorizedTrials"
	messages = "messages"
)


type Record struct {
}

// Called to initialize the chaincode
func (t *Record) Init(stub *shim.ChaincodeStub, param *appinit.Init) error {

	var err error

	fmt.Printf("Importing record %s for owner %s\n", param.RecordHash, param.OwnerPubKey)
	err = stub.PutState(owner, param.OwnerPubKey)
	if err != nil {
		return err
	}

	err = stub.PutState(recordHash, param.RecordHash)
	if err != nil {
		return err
	}

	//initialize authorized trials with empty array
	var list = &record.List{}
	err = t.PutState(stub, authorizedTrials, list)
	if err != nil {
		return err
	}

	//similarly, initialize messages
	err = t.PutState(stub, messages, list)
	if err != nil {
		return err
	}

	return nil
}

func (t *Record) AuthorizeTrial(stub *shim.ChaincodeStub, item *record.Item) error {
	fmt.Printf("Authorizing trial: %s", item.Data)
	return t.AddItem(stub, authorizedTrials, item)
}

func (t *Record) RevokeAuthorization(stub *shim.ChaincodeStub, item *record.Item) error {
	fmt.Printf("Revoking authorization from trial: %s", item.Data)
	return t.RemoveItem(stub, authorizedTrials, item)
}

func (t *Record) SendMessage(stub *shim.ChaincodeStub, item *record.Item) error {
	fmt.Printf("Recording message: %s", item.Data)
	return t.AddItem(stub, messages, item)
}

func (t *Record) DeleteMessage(stub *shim.ChaincodeStub, item *record.Item) error {
	fmt.Printf("Revoking authorization from trial: %s", item.Data)
	return t.RemoveItem(stub, messages, item)
}

func (t *Record) GetRecord(stub *shim.ChaincodeStub) error {

	data := &record.RecordData{}
	err := t.GetState(stub, authorizedTrials, data)
	if err != nil {
		return err
	}

	fmt.Printf("Query Response: %v\n", data)
	return nil
}

func (t *Record) GetAuthorizedTrials(stub *shim.ChaincodeStub) (*record.List, error) {

	list := &record.List{}
	err := t.GetState(stub, authorizedTrials, list)
	if err != nil {
		return nil, err
	}

	fmt.Printf("Query Response: %v\n", list)
	return list, nil
}

func main() {
	self := &Record{}
	interfaces := ccs.Interfaces {
		"trial-chain.chaincode.record": self,
		"appinit": self,
	}

	err := ccs.Start(interfaces)
	if err != nil {
		fmt.Printf("Error starting record chaincode: %s", err)
	}
}


//---------------Helper Functions---------------
func (t *Record) GetState(stub *shim.ChaincodeStub, location string, data proto.Message) error {
	raw, err := stub.GetState(location)
	if err != nil {
		return err
	}
	
	err = proto.Unmarshal(raw, data)
	if err != nil {
		return err
	}
	if data == nil {
		return errors.New("Data not found")
	}

	return nil
}

func (t *Record) PutState(stub *shim.ChaincodeStub, location string, pb proto.Message) error {
	data, err := proto.Marshal(pb)
	if err != nil {
		return err
	}

	err = stub.PutState(location, data)
	if err != nil {
		return err
	}

	return nil
}

func (t *Record) AddItem(stub *shim.ChaincodeStub, location string, item *record.Item) error {
	//load current items
	list := &record.List{}
	err := t.GetState(stub, location, list)
	if err != nil {
		return err
	}

	//append new item to list
	list.Items = append(list.Items, item)

	//store updated list
	err = t.PutState(stub, location, list)
	if err != nil {
		return err
	}

	return nil
}

func (t *Record) RemoveItem(stub *shim.ChaincodeStub, location string, item *record.Item) error {
	list := &record.List{}
	err := t.GetState(stub, location, list)
	if err != nil {
		return err
	}

	//loop through trials, keeping everything but the trial being revoked
	updated := &record.List{}
	for _, i := range list.Items {
		if !bytes.Equal(i.Data, item.Data) {
			updated.Items = append(updated.Items, i)
		}
	}

	//store updated list
	return t.PutState(stub, location, updated)
}

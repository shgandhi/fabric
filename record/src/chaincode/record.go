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

	"github.com/golang/protobuf/proto"
	"github.com/hyperledger/fabric/core/chaincode/shim"
)

const (
	owner = "owner"
	recordHash = "recordHash"
	authorizedTrials = "authorizedTrials"
	notifications = "notifications"
)

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
	var ts []string
	err = stub.PutState(authorizedTrials, ts)
	if err != nil {
		return err
	}

	//initialize notifications with empty array
	var ns []string
	err = stub.PutState(notifications, ns)
	if err != nil {
		return err
	}

	return nil
}

func (t *Record) AuthorizeTrial(stub *shim.ChaincodeStub, param *record.Trial) error {

	var err error

	fmt.Printf("Authorizing trial: %s", param.PubKey)
	t.AddItem(stub, authorizedTrials, param.PubKey)
}

func (t *Record) RevokeAuthorization(stub *shim.ChaincodeStub, param *record.Trial) error {

	var err error

	fmt.Printf("Revoking authorization from trial: %s", param.PubKey)
	t.RemoveItem(stub, authoaizedTrials, param.PubKey)
	
	return nil
}

func (t *Record) Notify(stub *shim.ChaincodeStub, param *record.Message) error {

	var err error

	fmt.Printf("Recording notification: %s", param.Hash)
	t.AddItem(stub, notifications, param.Hash)

	return nil
}

func (t *Record) GetRecord(stub *shim.ChaincodeStub) error {

	var err error

	data, err = t.GetState(stub, authorizedTrials)
	if err != nil {
		return nil, err
	}

	fmt.Printf("Query Response: %v\n", data)
	return &record.TrialsResult{Trials: data}, nil

	return nil
}

func (t *Record) GetAuthorizedTrials(stub *shim.ChaincodeStub) (*record.TrialsResult, error) {

	var err error

	data, err = t.GetState(stub, authorizedTrials)
	if err != nil {
		return nil, err
	}

	fmt.Printf("Query Response: %v\n", data)
	return &record.TrialsResult{Trials: data}, nil

	return nil
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
func (t *Record) AddItem(stub *shim.ChaincodeStub, location string, item string) error {
	//load current items
	data, err = stub.GetState(location)
	if err != nil {
		return err
	}

	//append new item to list
	data = append(data, item)

	//store updated list
	err = stub.PutState(location, data)
	if err != nil {
		return err
	}

	return nil
}

func (t *Record) RemoveItem(stub *shim.ChaincodeStub, location string, item string) error {
	data, err = stub.GetState(location)
	if err != nil {
		return err
	}

	//loop through trials, keeping everything but the trial being revoked
	updated = data[0:]
	for _, i =: range data {
		if i != item {
			updated = append(updated, i)
		}
	}

	//store updated list
	err = stub.PutState(location, updated)
	if err != nil {
		return err
	}
}


func (t *ChaincodeExample) GetState(stub *shim.ChaincodeStub, location string) ([]string, error) {
	bytes, err := stub.GetState(entity)
	if err != nil {
		return 0, errors.New("Failed to get state")
	}
	if bytes == nil {
		return 0, errors.New("Data not found")
	}

	return []string(bytes), nil
}

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
	"fmt"
	
	"hyperledger/ccs"
	"hyperledger/cci/appinit"
	"hyperledger/cci/registry"

	"github.com/golang/protobuf/proto"
	"github.com/hyperledger/fabric/core/chaincode/shim"
)

const (
	trials = "trials"
)

//Registry struct for type dispatch
type Registry struct {
}

//Init called to initialize the chaincode
func (t *Registry) Init(stub *shim.ChaincodeStub, param *appinit.Init) error {	
	// all data is added in later invocations
	return nil
}


//AddTrial - adds entry to the ledger
func (t *Registry) AddTrial(stub *shim.ChaincodeStub, trial *registry.Item) error {
	fmt.Printf("Adding trial: %s", trial.Data)
	return t.AddItem(stub, trials, trial)
}

//RemoveEntry - removes entry from the ledger
func (t *Registry) RemoveTrial(stub *shim.ChaincodeStub, trial *registry.Item) error {
	fmt.Printf("Revoking authorization from trial: %s", trial.Data)
	//Remove trial from list of trials
	return t.RemoveItem(stub, trials, trial)
}

//AddRecord - adds patient health record to the ledger
func (t *Registry) AddRecord(stub *shim.ChaincodeStub, record *registry.Record) error {
	fmt.Printf("Adding record: %s", record)

	return t.PutState(stub, record.Hash, record)
}

//AuthorizeTrial - Authorizes a trial to use a patient record
func (t *Registry) AuthorizeTrial(stub *shim.ChaincodeStub, pair *registry.Pair) error {
	fmt.Printf("Authorizing trial %s to use record %s", pair.Value, pair.Key)

	record := &registry.Record{}
	err := t.GetState(stub, pair.Key, record)
	if err != nil {
		return err
	}

	trial := &registry.Item{Data: pair.Value}
	record.Trials.Items = append(record.Trials.Items, trial)

	return t.PutState(stub, record.Hash, record)
}

//RevokeAuthorization - Revokes a trials access to a patient record
func (t *Registry) RevokeAuthorization(stub *shim.ChaincodeStub, pair *registry.Pair) error {
	fmt.Printf("Revoking access from trial %s for record %s", pair.Value, pair.Key)

	record := &registry.Record{}
	err := t.GetState(stub, pair.Key, record)
	if err != nil {
		return err
	}

	trial := &registry.Item{Data: pair.Value}
	record.Trials = removeItem(record.Trials, trial)

	return t.PutState(stub, record.Hash, record)
}

//SendMessage - Sends a message to a patient
func (t *Registry) SendMessage(stub *shim.ChaincodeStub, pair *registry.Pair) error {
	fmt.Printf("Sending message %s to record %s", pair.Value, pair.Key)

	record := &registry.Record{}
	err := t.GetState(stub, pair.Key, record)
	if err != nil {
		return err
	}

	msg := &registry.Item{Data: pair.Value}
	record.Messages.Items = append(record.Messages.Items, msg)

	return t.PutState(stub, record.Hash, record)
}

//DeleteMessage - Deletes a message to a patient
func (t *Registry) DeleteMessage(stub *shim.ChaincodeStub, pair *registry.Pair) error {
	fmt.Printf("Deleting message %s from record %s", pair.Value, pair.Key)

	record := &registry.Record{}
	err := t.GetState(stub, pair.Key, record)
	if err != nil {
		return err
	}

	msg := &registry.Item{Data: pair.Value}
	record.Messages = removeItem(record.Messages, msg)

	return t.PutState(stub, record.Hash, record)
}

//GetPatientKey - Retrieve patient public key from record data
func (t *Registry) GetPatientKey(stub *shim.ChaincodeStub, record *registry.Item) (*registry.Item, error) {
	data := &registry.Record{}
	err := t.GetState(stub, record.Data, data)
	if err != nil {
		return nil, err
	}

	fmt.Printf("Patient key: %v\n", data.Patient)

	patient := &registry.Item{Data: data.Patient}
	return patient, nil
}

//GetTrialList to get all trials
func (t *Registry) GetTrialList(stub *shim.ChaincodeStub, params *registry.EmptyParams) (*registry.List, error) {
	list := &registry.List{}
	err := t.GetState(stub, trials, list)
	if err != nil {
		return nil, err
	}

	fmt.Printf("Query Response: %v\n", list)
	return list, nil
}

//GetMessages to get all messages for a patient
func (t *Registry) GetMessages(stub *shim.ChaincodeStub, record *registry.Item) (*registry.List, error) {
	data := &registry.Record{}
	err := t.GetState(stub, record.Data, data)
	if err != nil {
		return nil, err
	}

	messages := data.Messages

	fmt.Printf("Messages: %v\n", )
	return messages, nil
}

//GetAuthorizedTrials - Get a list of all trials authorized to use this record
func (t *Registry) GetAuthorizedTrials(stub *shim.ChaincodeStub, record *registry.Item) (*registry.List, error) {
	data := &registry.Record{}
	err := t.GetState(stub, record.Data, data)
	if err != nil {
		return nil, err
	}

	ts := data.Trials

	fmt.Printf("Trials: %v\n", )
	return ts, nil
}

// Main--------------------------------------------------------------------
func main() {
	self := &Registry{}
	interfaces := ccs.Interfaces {
		"registry": self,
		"appinit": self,
	}

	fmt.Printf("Inside main")

	err := ccs.Start(interfaces) // one instance implements both Transactions and Queries interfaces
	if err != nil {
		fmt.Printf("Error starting Registry chaincode: %s", err)
	}
}

// Helpers-----------------------------------------------------------------

//PutState helper
func (t *Registry) PutState(stub *shim.ChaincodeStub, column string, pb proto.Message) error {
	data, err := proto.Marshal(pb)
	if err != nil {
		return err
	}

	fmt.Printf("Marshalled data: %v\n", data)
	err = stub.PutState(column, data)
	if err != nil {
		return err
	}

	return nil
}

//GetState helper
func (t *Registry) GetState(stub *shim.ChaincodeStub, column string, data proto.Message) error {
	raw, err := stub.GetState(column)
	if err != nil {
		return err
	}

	err = proto.Unmarshal(raw, data)
	if err != nil {
		return err
	}

	return nil
}

//AddItem helper
func (t *Registry) AddItem(stub *shim.ChaincodeStub, location string, item *registry.Item) error {
	//load current items
	list := &registry.List{}
	err := t.GetState(stub, location, list)
	if err != nil {
		return err
	}

	//append new item to list
	list.Items = append(list.Items, item)
	fmt.Printf("List: %v\n", list)

	//store updated list
	err = t.PutState(stub, location, list)
	if err != nil {
		return err
	}

	return nil
}

func removeItem(list *registry.List, item *registry.Item) *registry.List {
	//loop through items, keeping everything but the item to be removed
	updated := &registry.List{}
	for _, i := range list.Items {
		if i.Data != item.Data {
			updated.Items = append(updated.Items, i)
		}
	}
	return updated
}

//Remove Item from list in the datastore
func (t *Registry) RemoveItem(stub *shim.ChaincodeStub, location string, item *registry.Item) error {
	list := &registry.List{}
	err := t.GetState(stub, location, list)
	if err != nil {
		return err
	}

	updated := removeItem(list, item)

	//store updated list
	return t.PutState(stub, location, updated)
}

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
	"bytes"
	
	"hyperledger/ccs"
	"hyperledger/cci/appinit"
	"hyperledger/cci/trial-chain/chaincode/registry"

	"github.com/golang/protobuf/proto"
	"github.com/hyperledger/fabric/core/chaincode/shim"
)

const (
	trialHash = "trialHash"
)

//Registry Implementation
type Registry struct {
}

//Init called to initialize the chaincode
func (t *Registry) Init(stub *shim.ChaincodeStub, param *appinit.Init) error {	
	fmt.Printf("Listing the trial description %s\n", param.TrialHash)

	hash := &registry.TrialEntry{Data: param.TrialHash}
	data, err := proto.Marshal(hash)
	if err != nil {
		return err
	}
	err = stub.PutState(trialHash, data)
	if err != nil {
		return err
	}

	return nil
}


//AddEntry - adds entry to the ledger
func (t *Registry) AddEntry(stub *shim.ChaincodeStub, trialEntry *registry.TrialEntry) error {
	fmt.Printf("Adding trial: %s", trialEntry.Data)
	return t.AddItem(stub, trialHash, trialEntry)
}

//RemoveEntry - removes entry from the ledger
func (t *Registry) RemoveEntry(stub *shim.ChaincodeStub, trialEntry *registry.TrialEntry) error {
	fmt.Printf("Revoking authorization from trial: %s", trialEntry.Data)
	return t.RemoveItem(stub, trialHash, trialEntry)
}

//GetTrialDescription callback representing the query of a chaincode
func (t *Registry) GetTrialDescription(stub *shim.ChaincodeStub, params *registry.EmptyParams) (*registry.TrialEntry, error) {
	data := &registry.TrialEntry{}
	err := t.GetState(stub, trialHash, data)
	if err != nil {
		return nil, err
	}

	fmt.Printf("Query Response: %v\n", data)
	return data, nil
}

//GetTrialList to get all trials
func (t *Registry) GetTrialList(stub *shim.ChaincodeStub, params *registry.EmptyParams) (*registry.List, error) {
	list := &registry.List{}
	err := t.GetState(stub, trialHash, list)
	if err != nil {
		return nil, err
	}

	fmt.Printf("Query Response: %v\n", list)
	return list, nil
}


// Main----------------------------------------------------------------------------------------------------
func main() {
	self := &Registry{}
	interfaces := ccs.Interfaces {
		"trial-chain.chaincode.registry": self,
		"appinit": self,
	}

	fmt.Printf("Inside main")

	err := ccs.Start(interfaces) // one instance implements both Transactions and Queries interfaces
	if err != nil {
		fmt.Printf("Error starting Registry chaincode: %s", err)
	}
}

// Helpers-------------------------------------------------------------------------------------------------

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
func (t *Registry) AddItem(stub *shim.ChaincodeStub, location string, trialEntry *registry.TrialEntry) error {
	//load current items
	list := &registry.List{}
	err := t.GetState(stub, location, list)
	if err != nil {
		return err
	}

	//append new item to list
	list.TrialEntries = append(list.TrialEntries, trialEntry)
	fmt.Printf("List: %v\n", list)

	//store updated list
	err = t.PutState(stub, location, list)
	if err != nil {
		return err
	}

	return nil
}

//RemoveItem helper
func (t *Registry) RemoveItem(stub *shim.ChaincodeStub, location string, trialEntry *registry.TrialEntry) error {
	list := &registry.List{}
	err := t.GetState(stub, location, list)
	if err != nil {
		return err
	}

	//loop through trials, keeping everything but the trial to be removed
	updated := &registry.List{}
	for _, i := range list.TrialEntries {
		if !bytes.Equal(i.Data, trialEntry.Data) {
			updated.TrialEntries = append(updated.TrialEntries, i)
		}
	}

	//store updated list
	return t.PutState(stub, location, updated)
}

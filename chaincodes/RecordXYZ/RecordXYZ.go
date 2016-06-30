/*
Copyright IBM Corp 2016 All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

		 http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package main

import (
	"errors"
	"fmt"

	"github.com/hyperledger/fabric/core/chaincode/shim"
)

// RecordXYZChaincode implementation
type RecordXYZChaincode struct {
}

type RecordTable struct {
    //owner field holds patient public key
    //record field holds patient record hash from IPFS network
    //authorized field holds clinic public key if clinic authorized else nil
    //notify field holds message hash from IPFS network
    owner string
    recordHash string
    authorized string
    notify string
}

var records []RecordTable

// ============================================================================================================================
// Main
// ============================================================================================================================
func main() {
	err := shim.Start(new(RecordXYZChaincode))
	if err != nil {
		fmt.Printf("Error starting RecordXYZ Chaincode: %s", err)
	}
}

// Init resets all the things
func (t *RecordXYZChaincode) Init(stub *shim.ChaincodeStub, function string, args []string) ([]byte, error) {
	if len(args) != 1 {
		return nil, errors.New("Incorrect number of arguments. Expecting 1")
	}
	err := stub.PutState("dummy", []byte(args[0]))
	if err != nil {
		return nil, err
	}
	return nil, nil
}

// Invoke is our entry point to invoke a chaincode function
func (t *RecordXYZChaincode) Invoke(stub *shim.ChaincodeStub, function string, args []string) ([]byte, error) {
	fmt.Println("invoke is running " + function)

	// Handle different functions
	if function == "init" {													//initialize the chaincode state, used as reset
		return t.Init(stub, "init", args)
	} else if function == "linkRecord" {
		return t.linkRecord(stub, args)
	} else if function == "authorizeAccess" {
        return t.authorizeAccess(stub, args)
    } else if function == "removeAccess" {
        return t.removeAccess(stub, args)
    } //else if function == "notify" {
    // return t.notify(stub, args)
    //}
	fmt.Println("invoke did not find func: " + function)					//error
	return nil, errors.New("Received unknown function invocation")
}

//Stores the patientPubKey (provided by the patient when visiting the clinic to give their sample) in the owner field, 
//and the recordHash in the record field.
func (t *RecordXYZChaincode) linkRecord(stub *shim.ChaincodeStub, args []string) ([]byte, error) {	
	fmt.Println("running linkRecord()")
    if len(args) < 2 {
		return nil, errors.New("linkRecord operation must include two arguments, the patientPubKey and recordHash")
	}
    entry := RecordTable{recordHash: args[0], owner: args[1]}
    var err error
    err = stub.PutState(entry.recordHash, []byte(entry.owner))
	if err != nil {
		fmt.Printf("Error putting state %s", err)
		return nil, fmt.Errorf("put operation failed. Error updating state: %s", err)
	}
	return nil, nil
}

//Stores the authorized clinic's public key in the authorized field
func (t *RecordXYZChaincode) authorizeAccess(stub *shim.ChaincodeStub, args []string) ([]byte, error) {	
	fmt.Println("running authorizeAccess()")
    if len(args) < 2 {
		return nil, errors.New("authorizeAccess operation must include two arguments, the recordHash, and the clinicPubKey")
	}
    entry := RecordTable{recordHash: args[0], authorized: args[1]}
    records = append(records, entry)
    var err error
    err = stub.PutState(entry.recordHash, []byte(entry.authorized))
	if err != nil {
		fmt.Printf("Error putting state %s", err)
		return nil, fmt.Errorf("put operation failed. Error updating state: %s", err)
	}
	return nil, nil
}

//Removes the authorized clinic's public key in the authorized field
func (t *RecordXYZChaincode) removeAccess(stub *shim.ChaincodeStub, args []string) ([]byte, error) {	
	fmt.Println("running removeAccess()")
    if len(args) < 2 {
		return nil, errors.New("removeAccess operation must include two arguments, the recordHash, and the clinicPubKey")
	}
    entry := RecordTable{recordHash: args[0], authorized: args[1]}
    records = append(records, entry)
    var err error
    err = stub.DelState(entry.recordHash)
	if err != nil {
		fmt.Printf("Error removing state %s", err)
		return nil, fmt.Errorf("remove operation failed. Error updating state: %s", err)
	}
	return nil, nil
}

// Query is our entry point for queries
func (t *RecordXYZChaincode) Query(stub *shim.ChaincodeStub, function string, args []string) ([]byte, error) {
	fmt.Println("query is running " + function)
	// Handle different functions
	if function == "getRecord" {											//read a variable					
		return t.getRecord(stub, args);
	}
	fmt.Println("query did not find func: " + function)						//error
	return nil, errors.New("Received unknown function query")
}

// getRecord is used to return all the fields of the record queried
func (t *RecordXYZChaincode) getRecord(stub *shim.ChaincodeStub, args []string) ([]byte, error) {
	var recordHash, jsonResp string
	var err error
	if len(args) != 1 {
		return nil, errors.New("Incorrect number of arguments. Expecting name of the var to query")
	}
	recordHash = args[0]
	clinicPubKey, err := stub.GetState(recordHash)
	if err != nil {
		jsonResp = "{\"Error:\":\"getTrialClinics failed to get state for " + recordHash + "\"}"
		return nil, errors.New(jsonResp)
	}
	return clinicPubKey, nil
}


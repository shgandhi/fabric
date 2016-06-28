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
	"encoding/json"
	"errors"
	"fmt"

	"github.com/hyperledger/fabric/core/chaincode/shim"
)

//var trialHashMap map[string]string

// TrialRegistryChaincode implementation
type TrialRegistryChaincode struct {
}

// TrialRegistryHashMap implementation
type TrialRegistryHashMap struct {
	trialDescriptionHash string
	clinicPubKey []string
}

var trials []*TrialRegistryHashMap

// ============================================================================================================================
// Main
// ============================================================================================================================
func main() {
	err := shim.Start(new(TrialRegistryChaincode))
	if err != nil {
		fmt.Printf("Error starting TrialRegistry Chaincode: %s", err)
	}
}

// Init resets all the things
func (t *TrialRegistryChaincode) Init(stub *shim.ChaincodeStub, function string, args []string) ([]byte, error) {
	if len(args) != 1 {
		return nil, errors.New("Incorrect number of arguments. Expecting 1")
	}

	err := stub.PutState("trialDescriptionHash", []byte(args[0]))
	if err != nil {
		return nil, err
	}

	return nil, nil
}

// Invoke is our entry point to invoke a chaincode function
func (t *TrialRegistryChaincode) Invoke(stub *shim.ChaincodeStub, function string, args []string) ([]byte, error) {
	fmt.Println("invoke is running " + function)

	// Handle different functions
	if function == "init" {													//initialize the chaincode state, used as reset
		return t.Init(stub, "init", args)
	} else if function == "addEntry" {
		return t.addEntry(stub, args)
	} else if function == "removeEntry" {
        return t.removeEntry(stub, args)
    }
	fmt.Println("invoke did not find func: " + function)					//error

	return nil, errors.New("Received unknown function invocation")
}

// addEntry is used to store any key/value pair in the ledger
func (t *TrialRegistryChaincode) addEntry(stub *shim.ChaincodeStub, args []string) ([]byte, error) {
	
	fmt.Println("running addEntry()")

	if len(args) < 2 {
		return nil, errors.New("addEntry operation must include two arguments, the trialDescriptionHash and clinicPubKey")
	}

	entry := TrialRegistryHashMap{trialDescriptionHash: args[0], clinicPubKey: args[1:]}

	var err error
	
	//check if key already exists, update the old value if it exists
	for _, trialVal := range trials {
		if trialVal.trialDescriptionHash == entry.trialDescriptionHash {
			fmt.Println("is equal", trialVal.trialDescriptionHash, trialVal.clinicPubKey, entry.clinicPubKey)
			for _, clinic := range (entry.clinicPubKey) {
				trialVal.clinicPubKey = append(trialVal.clinicPubKey, clinic)
			}
			fmt.Println("after for", trialVal.clinicPubKey)
			clinicPubKeyByte,_ := json.Marshal(trialVal.clinicPubKey)
			err = stub.PutState(trialVal.trialDescriptionHash, clinicPubKeyByte)
			if err != nil {
				fmt.Printf("Error putting state %s", err)
				return nil, fmt.Errorf("put operation failed. Error updating state: %s", err)
			}
		}
	}
	
	clinicPubKeyByte,_ := json.Marshal(entry.clinicPubKey)
	err = stub.PutState(entry.trialDescriptionHash, clinicPubKeyByte)
	if err != nil {
		fmt.Printf("Error putting state %s", err)
		return nil, fmt.Errorf("put operation failed. Error updating state: %s", err)
	}
	return nil, nil
}

// removeEntry is used to store any key/value pair in the ledger
func (t *TrialRegistryChaincode) removeEntry(stub *shim.ChaincodeStub, args []string) ([]byte, error) {
	var err error
	//var trials []*TrialRegistryHashMap
	fmt.Println("running removeEntry()")

	if len(args) < 1 {
		return nil, errors.New("removeEntry operation must include one argument, the trialDescriptionHash")
	}

	trialHash := args[0]

	//for _, trialVal := range trials {
	//	if trialVal.trialDescriptionHash == trialHash {
	//		trialVal.clinicPubKey = append(entry.clinicPubKey)
	//		clinicPubKeyByte,_ := json.Marshal(trialVal.clinicPubKey)
	//		err = stub.PutState(trialVal.trialDescriptionHash, clinicPubKeyByte)
	//		if err != nil {
	//			fmt.Printf("Error putting state %s", err)
	//			return nil, fmt.Errorf("put operation failed. Error updating state: %s", err)
	//		}
	//	}
	//}
	err = stub.DelState(trialHash)
	if err != nil {
		return nil, fmt.Errorf("removeEntry operation failed. Error updating state: %s", err)
	} 
	return nil, fmt.Errorf("No clinics currently doing this trial %s", err)
}

// Query is our entry point for queries
func (t *TrialRegistryChaincode) Query(stub *shim.ChaincodeStub, function string, args []string) ([]byte, error) {
	fmt.Println("query is running " + function)

	// Handle different functions
	if function == "getTrialClinics" {											//read a variable					
		return t.getTrialClinics(stub, args);
	}
	fmt.Println("query did not find func: " + function)						//error

	return nil, errors.New("Received unknown function query")
}

// getTrialClinics is used to return the clinicPubKey of the trialDescriptionHash queried
func (t *TrialRegistryChaincode) getTrialClinics(stub *shim.ChaincodeStub, args []string) ([]byte, error) {
	var trialDescriptionHash, jsonResp string
	var err error

	if len(args) != 1 {
		return nil, errors.New("Incorrect number of arguments. Expecting name of the var to query")
	}

	trialDescriptionHash = args[0]
	clinicPubKey, err := stub.GetState(trialDescriptionHash)
	if err != nil {
		jsonResp = "{\"Error:\":\"getTrialClinics failed to get state for " + trialDescriptionHash + "\"}"
		return nil, errors.New(jsonResp)
	}

	return clinicPubKey, nil
}


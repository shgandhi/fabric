/*Licensed under Apache 2.0 (the "License");
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
	
	"github.com/hyperledger/fabric/examples/chaincode/chaintool/TrialRegistry/app/build/src/hyperledger/cci/appinit"
	"github.com/hyperledger/fabric/examples/chaincode/chaintool/TrialRegistry/app/build/src/hyperledger/cci/org/hyperledger/chaincode/TrialRegistry"
	"github.com/hyperledger/fabric/examples/chaincode/chaintool/TrialRegistry/app/build/src/hyperledger/ccs"

	"github.com/golang/protobuf/proto"
	"github.com/hyperledger/fabric/core/chaincode/shim"
)

// TrialRegistryChaincode implementation
type TrialRegistryChaincode struct {
}

// ============================================================================================================================
// Main
// ============================================================================================================================
func main() {
	self := &TrialRegistryChaincode{}
	interfaces := ccs.Interfaces {
		"org.hyperledger.chaincode.TrialRegistry": self,
		"appinit": self,
	}

	err := ccs.Start(interfaces) // one instance implements both Transactions and Queries interfaces
	if err != nil {
		fmt.Printf("Error starting example chaincode: %s", err)
	}
}

// Init resets all the things
func (t *TrialRegistryChaincode) Init(stub *shim.ChaincodeStub, param *appinit.Init) error {
	
	var err error

	fmt.Printf("Sample clinic value = %s ", param.SampleClinic.Value)
	
	//write state to the ledger
	err = t.PutState(stub, param.SampleClinic)
	if err != nil {
		return err
	}

	return nil
}


//AddEntry - adds entry to the ledger
func (t *TrialRegistryChaincode) AddEntry(stub *shim.ChaincodeStub, param *TrialRegistry.HashMap) error {
	var err error

	//Write the state to the ledger
	err = stub.PutState(param.TrialHash, []byte(param.TrialClinic))
	if err != nil {
		return err
	}

	return nil
}

//RemoveEntry - removes entry from the ledger
func (t *TrialRegistryChaincode) RemoveEntry(stub *shim.ChaincodeStub, param *TrialRegistry.HashMap) error {
	var err error

	//Write the state to the ledger
	err = stub.DelState(param.TrialHash)
	if err != nil {
		return errors.New("Failed to delete state")
	}

	return nil
}

// Query callback representing the query of a chaincode
func (t *TrialRegistryChaincode) getTrialClinics(stub *shim.ChaincodeStub, param *TrialRegistry.HashMap) (*TrialRegistry.HashMap, error) {
	var err error

	//Get the state to the ledger
	val, err := stub.GetState(param.TrialHash)
	if err != nil {
		return nil, err
	}

	fmt.Printf("Clinic leading the queried trial: %s\n", val)
	return &TrialRegistry.HashMap{TrialClinic: *proto.String(string(val))}, nil
}

func (t *TrialRegistryChaincode) GetTrials(stub *shim.ChaincodeStub) ([]byte, error) {
	var err error

	//Get the state from the ledger
	hashesIter, err := stub.RangeQueryState("", "")
	if err != nil {
		return nil, fmt.Errorf("GetTrials operation failed. Error accessing state: %s", err)
	}
	defer hashesIter.Close()

	var hashes []string
	var clinics []string
	ongoingTrials := make(map[string]string)
	for hashesIter.HasNext() {
		hash, _, iterErr := hashesIter.Next()
		if iterErr != nil {
			return nil, fmt.Errorf("GetTrials operation failed. Error accessing state: %s", err)
		}
		clinic, _ := stub.GetState(hash)
		hashes = append(hashes, hash)
		clinics = append(clinics, string(clinic))
		ongoingTrials[hash] = string(clinic)
	}

	jsonMap, err := json.Marshal(ongoingTrials)
	if err != nil {
		return nil, fmt.Errorf("GetTrials operation failed.Error marshalling JSON: %s", err)
	}
	return jsonMap, nil
	//return &TrialRegistry.HashParam{TrialHash: *proto.String(string(val))}, &TrialRegistry.ClinicParam{TrialClinic: *proto.String(string(val))}, nil 
}

//-------------------------------------------------
// Helpers
//-------------------------------------------------
func (t *TrialRegistryChaincode) PutState(stub *shim.ChaincodeStub, clinic *appinit.Clinic) error {
	return stub.PutState(clinic.Entity, []byte(clinic.Value))
}

func (t *TrialRegistryChaincode) GetState(stub *shim.ChaincodeStub, trialHash string) (string, error) {
	bytes, err := stub.GetState(trialHash)
	if err != nil {
		return "nil", errors.New("Failed to get state")
	}
	if bytes == nil {
		return "nil", errors.New("TrialHash not found")
	}

	val := string(bytes)
	return val, nil
}

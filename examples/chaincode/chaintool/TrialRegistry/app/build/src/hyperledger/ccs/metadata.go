package ccs

import (
	"errors"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	"hyperledger/cci/org/hyperledger/chaintool/meta"
)

var interfaces = map[string][]byte{
	"org.hyperledger.chaincode.TrialRegistry": []byte("\x1f\x8b\x08\x00\x00\x00\x00\x00\x02\xff\xe3\xca\x4d\x2d\x2e\x4e\x4c\x4f\x55\xf0\x48\x2c\xce\xf0\x4d\x2c\x50\xa8\xe6\x52\x00\x82\xe2\x92\xa2\xcc\xbc\x74\x05\x20\x99\x98\x03\x92\x51\xb0\x55\x30\xb4\xc6\x90\x71\xce\xc9\xcc\xcb\x4c\x06\xca\x19\x59\x73\xd5\x72\x71\xc1\x8c\x72\xcd\x2d\x28\xa9\x04\x1a\x04\x14\x2a\x29\x4a\xcc\x2b\x4e\x4c\x2e\xc9\xcc\xcf\x2b\x86\x1a\x5d\x96\x9f\x99\xa2\xe0\x98\x92\xe2\x9a\x57\x52\x54\xa9\x01\xb5\x56\x13\x61\x01\x58\x3e\x28\x35\x37\xbf\x2c\x15\x43\x09\xc4\x9e\xc2\xd2\xd4\xa2\xcc\x54\x98\x79\x30\x87\xbb\xa7\x96\x84\x20\x1c\x55\x8c\xc5\x64\x74\x95\xc5\x1a\x60\x97\xc2\x0d\x06\x00\xf2\xa4\x8f\xaf\x0c\x01\x00\x00"),
	"appinit": []byte("\x1f\x8b\x08\x00\x00\x00\x00\x00\x02\xff\xe3\xca\x4d\x2d\x2e\x4e\x4c\x4f\x55\x70\xce\xc9\xcc\xcb\x4c\x56\xa8\xe6\x52\x80\x82\xe2\x92\xa2\xcc\xbc\x74\x85\xd4\xbc\x92\xcc\x92\x4a\x05\x5b\x05\x43\x6b\x74\xa9\xb2\xc4\x9c\xd2\x54\x05\xa0\x94\x91\x35\x57\x2d\x17\x17\xcc\x24\xcf\xbc\xcc\x12\x24\x73\xa0\x06\x17\x27\xe6\x16\xe4\xa4\x42\x39\x60\xd3\x6a\xb9\x00\x9e\xee\xb1\x59\x7d\x00\x00\x00"),
}

var facts = &meta.Facts{
	Facts: []*meta.Facts_Fact{
		&meta.Facts_Fact{Name: "Application Name", Value: "org.hyperledger.chaincode.TrialRegistry"},
		&meta.Facts_Fact{Name: "Application Version", Value: "0.1-SNAPSHOT"},
		&meta.Facts_Fact{Name: "Platform", Value: "org.hyperledger.chaincode.golang version 1"},
		&meta.Facts_Fact{Name: "Go Version", Value: "go1.6 linux/amd64"},
		&meta.Facts_Fact{Name: "Chaintool Version", Value: "0.8-SNAPSHOT"},
	},
}

type ChaincodeMetaData struct {
}

func (self *ChaincodeMetaData) GetInterfaces(stub *shim.ChaincodeStub, params *meta.GetInterfacesParams) (*meta.Interfaces, error) {

	response := &meta.Interfaces{}
	for name, data := range interfaces {
		desc := &meta.InterfaceDescriptor{Name: name}

		if params.IncludeContent {
			desc.Data = data
		}

		response.Descriptors = append(response.Descriptors, desc)
	}

	return response, nil
}

func (self *ChaincodeMetaData) GetInterface(stub *shim.ChaincodeStub, params *meta.GetInterfaceParams) (*meta.InterfaceDescriptor, error) {

	intf, ok := interfaces[params.Name]
	if !ok {
		return nil, errors.New("Interface " + params.Name + " not found")
	}

	return &meta.InterfaceDescriptor{Data: intf}, nil
}

func (self *ChaincodeMetaData) GetFacts(stub *shim.ChaincodeStub, params *meta.GetFactsParams) (*meta.Facts, error) {

	return facts, nil
}

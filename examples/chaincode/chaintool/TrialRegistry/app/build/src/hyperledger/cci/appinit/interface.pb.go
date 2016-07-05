// Code generated by protoc-gen-go.
// source: interface.proto
// DO NOT EDIT!

/*
Package appinit is a generated protocol buffer package.

It is generated from these files:
	interface.proto

It has these top-level messages:
	Clinic
	Init
*/
package appinit

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

type Clinic struct {
	Entity string `protobuf:"bytes,1,opt,name=entity" json:"entity,omitempty"`
	Value  string `protobuf:"bytes,2,opt,name=value" json:"value,omitempty"`
}

func (m *Clinic) Reset()         { *m = Clinic{} }
func (m *Clinic) String() string { return proto.CompactTextString(m) }
func (*Clinic) ProtoMessage()    {}

type Init struct {
	SampleClinic *Clinic `protobuf:"bytes,1,opt,name=sampleClinic" json:"sampleClinic,omitempty"`
}

func (m *Init) Reset()         { *m = Init{} }
func (m *Init) String() string { return proto.CompactTextString(m) }
func (*Init) ProtoMessage()    {}

func (m *Init) GetSampleClinic() *Clinic {
	if m != nil {
		return m.SampleClinic
	}
	return nil
}

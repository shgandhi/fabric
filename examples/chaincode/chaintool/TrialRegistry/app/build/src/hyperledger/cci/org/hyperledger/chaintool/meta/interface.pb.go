// Code generated by protoc-gen-go.
// source: interface.proto
// DO NOT EDIT!

/*
Package meta is a generated protocol buffer package.

It is generated from these files:
	interface.proto

It has these top-level messages:
	InterfaceDescriptor
	Interfaces
	GetInterfacesParams
	GetInterfaceParams
	GetFactsParams
	Facts
*/
package meta

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

type InterfaceDescriptor struct {
	Name string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	Data []byte `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
}

func (m *InterfaceDescriptor) Reset()         { *m = InterfaceDescriptor{} }
func (m *InterfaceDescriptor) String() string { return proto.CompactTextString(m) }
func (*InterfaceDescriptor) ProtoMessage()    {}

type Interfaces struct {
	Descriptors []*InterfaceDescriptor `protobuf:"bytes,1,rep,name=descriptors" json:"descriptors,omitempty"`
}

func (m *Interfaces) Reset()         { *m = Interfaces{} }
func (m *Interfaces) String() string { return proto.CompactTextString(m) }
func (*Interfaces) ProtoMessage()    {}

func (m *Interfaces) GetDescriptors() []*InterfaceDescriptor {
	if m != nil {
		return m.Descriptors
	}
	return nil
}

type GetInterfacesParams struct {
	IncludeContent bool `protobuf:"varint,1,opt,name=IncludeContent" json:"IncludeContent,omitempty"`
}

func (m *GetInterfacesParams) Reset()         { *m = GetInterfacesParams{} }
func (m *GetInterfacesParams) String() string { return proto.CompactTextString(m) }
func (*GetInterfacesParams) ProtoMessage()    {}

type GetInterfaceParams struct {
	Name string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
}

func (m *GetInterfaceParams) Reset()         { *m = GetInterfaceParams{} }
func (m *GetInterfaceParams) String() string { return proto.CompactTextString(m) }
func (*GetInterfaceParams) ProtoMessage()    {}

type GetFactsParams struct {
}

func (m *GetFactsParams) Reset()         { *m = GetFactsParams{} }
func (m *GetFactsParams) String() string { return proto.CompactTextString(m) }
func (*GetFactsParams) ProtoMessage()    {}

type Facts struct {
	Facts []*Facts_Fact `protobuf:"bytes,1,rep,name=facts" json:"facts,omitempty"`
}

func (m *Facts) Reset()         { *m = Facts{} }
func (m *Facts) String() string { return proto.CompactTextString(m) }
func (*Facts) ProtoMessage()    {}

func (m *Facts) GetFacts() []*Facts_Fact {
	if m != nil {
		return m.Facts
	}
	return nil
}

type Facts_Fact struct {
	Name  string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	Value string `protobuf:"bytes,2,opt,name=value" json:"value,omitempty"`
}

func (m *Facts_Fact) Reset()         { *m = Facts_Fact{} }
func (m *Facts_Fact) String() string { return proto.CompactTextString(m) }
func (*Facts_Fact) ProtoMessage()    {}

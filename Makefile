IFSRC = registry/src/interfaces/
IFDIR = interfaces/
NAME = registry
IFNAME = interface
CHAINCODE = registry/src/chaincode/
INTERFACES = appinit registry
protos = $(addsuffix .proto,$(INTERFACES))
ccis = $(addsuffix .cci,$(INTERFACES))
src-cci = $(addprefix $(IFSRC),$(ccis))
dest-protos = $(addprefix $(IFDIR),$(protos))

.PHONY: chaincode interface client all

all: chaincode client

#create the directory for storing the chaincode interface definitions
$(IFDIR):
	mkdir -p $(IFDIR)

#convert the .cci files to protobuf definitions
$(IFDIR)%.proto: $(IFDIR) $(IFSRC)%.cci
	chaintool proto $(IFSRC)$(patsubst %.proto,%.cci,$(notdir $@)) -o $@

#build the chaincode binary
chaincode: $(IFSRC)*.cci $(CHAINCODE)*.go
	cd registry; chaintool build

#build the cljs rest client
client: $(dest-protos)
	cp $(dest-protos) registry/client
	cd registry/client; $(MAKE)

#build the java interface to the chaincode, and copy it into the gateway
interface: $(dest-protos)
	cd $(IFDIR); cp $(NAME).proto $(IFNAME).proto
	cd $(IFDIR); protoc $(IFNAME).proto --java_out=.
	cp -r $(IFDIR)$(NAME) gateway/src

#-------- targets for running chaincode / server --------#
.PHONY: run dev deploy
run:
	cd scripts; ./run

dev:
	cd scripts; ./dev

deploy:
	cd scripts; ./deploy

SRCS = $(shell find src -type f)

all: client

client: ./out/trial-chain.js

node_modules: project.clj
	lein npm install

./out/trial-chain.js: $(SRCS) node_modules Makefile
	lein cljsbuild once
	@echo "Compilation complete: use \"node $@ --help\" for execution instructions"

clean:
	-@rm -rf ./out ||:
	-@rm -rf node_modules ||:

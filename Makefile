VERSION_FILE := ./src/VERSION
NODEAPP_VERSION := $(shell cat ${VERSION_FILE})
ECR_URL := 038030846741.dkr.ecr.ap-northeast-2.amazonaws.com/nodeapp
SRC_DIR := ./src

run:
	export APP_VERSION=${NODEAPP_VERSION}; cd ${SRC_DIR}; npm start;

build:
	docker build -t $(ECR_URL):$(NODEAPP_VERSION) ${SRC_DIR}

push:
	docker push $(ECR_URL):$(NODEAPP_VERSION)

all: build push
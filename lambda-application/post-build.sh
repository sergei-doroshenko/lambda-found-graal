#!/bin/bash

CUR_DIR := $(abspath $(patsubst %/,%,$(dir $(abspath $(lastword $(MAKEFILE_LIST))))))

build-S3GraalVM() {
  zip -r distributive.zip . -i server bootstrap
  zip -r distributive.zip ../lambda-application -i -i build/graalvm/server bootstrap
}

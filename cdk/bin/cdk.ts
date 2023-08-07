#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { LambdaGraalvmStack } from "../lib/lambda-graalvm-stack";

const app = new App();
new LambdaGraalvmStack(app, "LambdaGraalVMStack", {
    env: { account: process.env.PERSONAL_AWS_ACCOUNT, region: "eu-west-1" }
});
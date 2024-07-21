# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

### API test
```shell
curl -v -X POST -H 'Content-Type:application/json' -d '{"micronautPackage":"bom"}'  https://e8klpa8u7f.execute-api.eu-west-1.amazonaws.com/prod/test
```

### Lambda test
```shell
aws lambda invoke --function-name GraalVMLambda outfile --region us-east-1
```


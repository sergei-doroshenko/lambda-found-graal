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

### The underlying command

```shell
docker run --rm -u root \ 
-v "/Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application:/asset-input:delegated" \
-v "/Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/cdk/cdk.out/asset.f4750f6b21f9216b26be3f31f2e5afc1afe4927560fb6c4ac2b391684069a000:/asset-output:delegated" \
-v "/Users/sddorosh/.m2/:/root/.m2/:delegated" \
-w "/asset-input" "marksailes/arm64-al2-graalvm:al2-21.2.0" \
-c "mvn clean install -P native-image && cp /asset-input/target/function.zip /asset-output/"
```

### API test
```shell
curl -v -X POST -H 'Content-Type:application/json' -d '{"micronautPackage":"bom"}'  https://e8klpa8u7f.execute-api.eu-west-1.amazonaws.com/prod/test
```

### Errors
Failed to load the native runtime interface client library /aws-lambda-runtime-interface-client.musl.so. Exception: Can't load library: /tmp/.aws-lambda-runtime-interface-client

Failed to load the native runtime interface client library /aws-lambda-runtime-interface-client.glibc.so. Exception: Can't load library: /tmp/.aws-lambda-runtime-interface-client

RequestId: 63e8035d-dda7-4995-9dfb-b9e8a91afe28 Error: Runtime exited with error: exit status 255
Runtime.ExitError

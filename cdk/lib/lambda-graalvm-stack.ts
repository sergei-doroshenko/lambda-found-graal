import {aws_lambda as lambda, aws_apigateway as api, BundlingOutput, DockerImage, Duration, Stack, StackProps} from "aws-cdk-lib";
import { Construct } from "constructs";

export class LambdaGraalvmStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const graalVMLambda = new lambda.Function(this, "GraalVMLambda", {
      functionName: "GraalVMLambda",
      runtime: lambda.Runtime.PROVIDED_AL2,
      memorySize: 512,
      timeout: Duration.minutes(1),
      handler: " org.sdoroshenko.lambda.application.ProductRequestHandler::handleRequest",
      code: lambda.Code.fromAsset("../lambda-application/", {
        bundling: {
          command: [
            "-c",
            "mvn clean install -P native-image && cp /asset-input/target/function.zip /asset-output/"
          ],
          image: DockerImage.fromRegistry("marksailes/arm64-al2-graalvm:al2-21.2.0"),
          volumes: [{
            hostPath: process.env.HOME + "/.m2/",
            containerPath: "/root/.m2/"
          }],
          user: "root",
          outputType: BundlingOutput.ARCHIVED
        }
      })
    });

    const restApi = new api.LambdaRestApi(this, "GraalVMTestApi", {
      handler: graalVMLambda,
      proxy: false
    });

    const resource = restApi.root.addResource("test");
    resource.addMethod("POST");

  }
}

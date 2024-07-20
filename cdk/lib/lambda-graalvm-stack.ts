import {
    aws_lambda as lambda,
    aws_s3 as s3,
    BundlingOutput, CfnOutput,
    DockerImage,
    Duration,
    RemovalPolicy,
    Stack,
    StackProps
} from "aws-cdk-lib";
import {Construct} from "constructs";
import {RetentionDays} from "aws-cdk-lib/aws-logs";

export class LambdaGraalvmStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "GraalVMOutputBucket", {
        bucketName: "sddorosh-graalvm-lambda-output",
        removalPolicy: RemovalPolicy.DESTROY
    });

    const graalVMLambda = new lambda.Function(this, "GraalVMLambda", {
          functionName: "GraalVMLambda",
          runtime: lambda.Runtime.PROVIDED_AL2,
          architecture: lambda.Architecture.ARM_64,
          memorySize: 512,
          timeout: Duration.minutes(1),
          handler: "org.sdoroshenko.lambda.application.S3GraalVM::handleRequest",
          code: lambda.Code.fromAsset("../lambda-application/distributive.zip"),
          logRetention: RetentionDays.THREE_DAYS,
        environment: {
            S3Bucket: bucket.bucketName
        }
    });

    bucket.grantReadWrite(graalVMLambda);

    // const restApi = new api.LambdaRestApi(this, "GraalVMTestApi", {
    //   handler: graalVMLambda,
    //   proxy: false
    // });
    //
    // const resource = restApi.root.addResource("test");
    // resource.addMethod("POST");

      new CfnOutput(this, "GraalVMLambdaArn", { value: graalVMLambda.functionArn });
  }
}
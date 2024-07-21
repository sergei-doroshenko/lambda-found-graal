import {
    aws_apigateway as api,
    aws_iam as iam,
    aws_lambda as lambda,
    aws_s3 as s3,
    CfnOutput,
    Duration,
    RemovalPolicy,
    Stack,
    StackProps
} from "aws-cdk-lib";
import { Construct } from "constructs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";

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
            code: lambda.Code.fromAsset("../lambda-application/build/distributive.zip"),
            logRetention: RetentionDays.THREE_DAYS,
            environment: {
                S3Bucket: bucket.bucketName
            }
        });

        bucket.grantReadWrite(graalVMLambda);

        this.createRestApi(graalVMLambda, "GraalVMTestApi", "TestClientKey");

        new iam.Role(this, "GraalVMApiClientRole", {
            roleName: "graalvm-api-client-role",
            assumedBy: new iam.AccountPrincipal("607464808644"),
            managedPolicies: [
                iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonAPIGatewayInvokeFullAccess")
            ]
        });

        new CfnOutput(this, "GraalVMLambdaArn", { value: graalVMLambda.functionArn });
    }

    private createRestApi(handler: lambda.IFunction, apiName: string, keyName: string) {
        const restApi = new api.LambdaRestApi(this, apiName, {
            handler,
            proxy: false,
            integrationOptions: {
                allowTestInvoke: true
            },
            apiKeySourceType: api.ApiKeySourceType.HEADER,
            deployOptions: {
                metricsEnabled: true,
                loggingLevel: api.MethodLoggingLevel.INFO,
                dataTraceEnabled: true,
                tracingEnabled: true,
                stageName: "dev",
            },
            cloudWatchRole: true,
            defaultMethodOptions: {
                authorizationType: api.AuthorizationType.IAM,
                apiKeyRequired: true
            }
        });
        restApi.addApiKey(keyName);

        const resource = restApi.root.addResource("test");
        resource.addMethod("POST");

        return restApi;
    }
}

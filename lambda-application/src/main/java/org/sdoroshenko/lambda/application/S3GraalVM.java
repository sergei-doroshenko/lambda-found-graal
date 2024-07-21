package org.sdoroshenko.lambda.application;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.S3ClientBuilder;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.text.MessageFormat;
import java.util.Map;
import java.util.UUID;

/**
 * Handler for requests to Lambda function.
 */
public class S3GraalVM implements RequestHandler<Map<String,String>, APIGatewayProxyResponseEvent> {

    private S3ClientBuilder builder = S3Client.builder();

    static {
        System.setProperty("software.amazon.awssdk.http.service.impl",
                "software.amazon.awssdk.http.urlconnection.UrlConnectionSdkHttpService");
    }

    @Override
    public APIGatewayProxyResponseEvent handleRequest(Map<String,String> event, Context context) {
        LambdaLogger logger = context.getLogger();

        String bucket = System.getenv("S3Bucket");
        String key = UUID.randomUUID().toString();
        logger.log(event.toString());
        String content = event.get("body") == null ? "Test payload" : event.get("body");

        try (S3Client client = builder.build()) {
            client.putObject(PutObjectRequest.builder().bucket(bucket).key(key).build(),
                    RequestBody.fromString(content));
        }

        String msg = MessageFormat.format("Created S3 File {0} in bucket {1}", key, bucket);
        logger.log(msg);

        return new APIGatewayProxyResponseEvent()
                .withStatusCode(200)
                .withBody(msg)
                .withIsBase64Encoded(false)
                .withHeaders(Map.of("Content-Type", "text/html; charset=utf-8"));
    }
}

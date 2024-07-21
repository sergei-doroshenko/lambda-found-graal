package org.sdoroshenko.lambda.application;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPResponse;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.S3ClientBuilder;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.text.MessageFormat;
import java.util.UUID;

/**
 * Handler for requests to Lambda function.
 */
public class S3Java implements RequestHandler<APIGatewayV2HTTPEvent, APIGatewayV2HTTPResponse> {

    private S3ClientBuilder builder = S3Client.builder();

    @Override
    public APIGatewayV2HTTPResponse handleRequest(APIGatewayV2HTTPEvent event, Context context) {
        String bucket = System.getenv("S3Bucket");
        String key = UUID.randomUUID().toString();
        String content = event.getBody();

        try (S3Client client = builder.build()) {
            client.putObject(PutObjectRequest.builder().bucket(bucket).key(key).build(),
                    RequestBody.fromString(content));
        }

        String msg = MessageFormat.format("Created S3 File {0} in bucket {1}", key, bucket);
        context.getLogger().log(msg);

        return APIGatewayV2HTTPResponse.builder()
                .withStatusCode(200)
                .withBody(msg)
                .build();
    }
}

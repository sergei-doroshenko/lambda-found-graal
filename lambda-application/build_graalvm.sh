#!/bin/bash

docker run --rm -v $(pwd):/working ghcr.io/graalvm/graalvm-ce:ol8-java11-22.3.3 \
    /bin/bash -c "
                    gu install native-image; \
                    native-image --enable-url-protocols=http,https \
                      -H:ReflectionConfigurationFiles=/working/src/main/resources/reflect.json \
                      -H:+ReportUnsupportedElementsAtRuntime --no-server -jar \"/working/build/libs/lambda-application-all.jar\" \
                    ; \
                    cp lambda-application-all /working/build/graalvm/server"

mkdir -p build/graalvm
if [ ! -f "build/graalvm/server" ]; then
    echo "there was an error building graalvm image"
    exit 1
fi
## Install GraalVM

See [Install GraalVM on MacOs](https://www.graalvm.org/latest/docs/getting-started/macos/)

The installation path will be:
/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home

Update `~/.zshrc`

```shell
export GRAALVM_HOME=/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home

export JAVA_HOME=/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home
```

Source updates:
```shell
source ~/.zshrc
```

Check `$JAVA_HOME`:
```shell
echo $JAVA_HOME
```

The output should be:
`/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home`

## Build native-image

```shell
mvn clean install -P native-image
```

## Build with Docker

Docker Hub [link](https://hub.docker.com/r/marksailes/al2-graalvm)

```shell
docker pull marksailes/al2-graalvm
```

Dockerfile [git repo](https://github.com/marksailes/al2-graalvm)

Run:

```shell
docker run --name lambda-build \
-v "/Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application:/asset-input:delegated" \
-v "/Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application:/asset-output:delegated" \
-v "/Users/sddorosh/.m2/:/root/.m2/:delegated" \
-w "/asset-input" \
-it marksailes/al2-graalvm
```

Explanation:

Mount: -v .:/content -w /content \
-v "/Users/sddorosh/.m2/:/root/.m2/:delegated" \

Mount assets input:
-v .:/project \

```shell
docker run --rm --name lambda-build \
-v "/Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application:/asset-input:delegated" \
-v "/Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application:/asset-output:delegated" \
-v "/Users/sddorosh/.m2/:/root/.m2/:delegated" \
-w "/asset-input" \
-it marksailes/al2-graalvm -c "mvn clean install -Pnative  && cp /asset-input/target/function.zip /asset-output/"
```

## Troubleshooting


## Links

* [Blog](https://www.graalvmonlambda.com/summary/how-it-works/)

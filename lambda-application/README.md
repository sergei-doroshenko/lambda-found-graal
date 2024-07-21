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

## Errors

java.lang.IllegalArgumentException: Type com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPEvent is instantiated reflectively but was never registered. Register the type by adding "unsafeAllocated" for the type in reflect-config.json.

Update `reflect.json`

```json
[
  {
    "name": "com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPEvent",
    "unsafeAllocated": true
  }
]
```
## GraalVM build log

Execution directory: `lambda-application`

Command:
`mvn clean install -P native-image`

Output:
```log
[INFO] Scanning for projects...
[INFO] 
[INFO] -----------------< com.sdoroshenko:lambda-application >-----------------
[INFO] Building Lambda Application 1.0
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- clean:3.2.0:clean (default-clean) @ lambda-application ---
[INFO] Deleting /Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target
[INFO] 
[INFO] --- resources:3.3.1:resources (default-resources) @ lambda-application ---
[INFO] Copying 13 resources from src/main/resources to target/classes
[INFO] 
[INFO] --- compiler:3.11.0:compile (default-compile) @ lambda-application ---
[INFO] Changes detected - recompiling the module! :source
[INFO] Compiling 1 source file with javac [debug target 11] to target/classes
[WARNING] system modules path not set in conjunction with -source 11
[INFO] 
[INFO] --- resources:3.3.1:testResources (default-testResources) @ lambda-application ---
[INFO] skip non existing resourceDirectory /Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/src/test/resources
[INFO] 
[INFO] --- compiler:3.11.0:testCompile (default-testCompile) @ lambda-application ---
[INFO] No sources to compile
[INFO] 
[INFO] --- surefire:3.1.2:test (default-test) @ lambda-application ---
[INFO] No tests to run.
[INFO] 
[INFO] --- jar:3.3.0:jar (default-jar) @ lambda-application ---
[INFO] Building jar: /Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar
[INFO] 
[INFO] --- shade:3.2.4:shade (default) @ lambda-application ---
[INFO] Including com.amazonaws:aws-lambda-java-core:jar:1.2.1 in the shaded jar.
[INFO] Including com.amazonaws:aws-lambda-java-events:jar:3.8.0 in the shaded jar.
[INFO] Including joda-time:joda-time:jar:2.6 in the shaded jar.
[INFO] Including com.amazonaws:aws-lambda-java-runtime-interface-client:jar:2.0.0 in the shaded jar.
[INFO] Including com.amazonaws:aws-lambda-java-serialization:jar:1.0.0 in the shaded jar.
[WARNING] aws-lambda-java-core-1.2.1.jar, aws-lambda-java-events-3.8.0.jar, aws-lambda-java-runtime-interface-client-2.0.0.jar, aws-lambda-java-serialization-1.0.0.jar, joda-time-2.6.jar, lambda-application-1.0.jar define 1 overlapping resource: 
[WARNING]   - META-INF/MANIFEST.MF
[WARNING] maven-shade-plugin has detected that some class files are
[WARNING] present in two or more JARs. When this happens, only one
[WARNING] single version of the class is copied to the uber jar.
[WARNING] Usually this is not harmful and you can skip these warnings,
[WARNING] otherwise try to manually exclude artifacts based on
[WARNING] mvn dependency:tree -Ddetail=true and the above output.
[WARNING] See http://maven.apache.org/plugins/maven-shade-plugin/
[INFO] Replacing /Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application.jar with /Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0-shaded.jar
[INFO] 
[INFO] --- native-image:21.2.0:native-image (default) @ lambda-application ---
[INFO] ImageClasspath Entry: com.amazonaws:aws-lambda-java-core:jar:1.2.1:compile (file:///Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-core/1.2.1/aws-lambda-java-core-1.2.1.jar)
[INFO] ImageClasspath Entry: com.amazonaws:aws-lambda-java-events:jar:3.8.0:compile (file:///Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-events/3.8.0/aws-lambda-java-events-3.8.0.jar)
[INFO] ImageClasspath Entry: joda-time:joda-time:jar:2.6:compile (file:///Users/sddorosh/.m2/repository/joda-time/joda-time/2.6/joda-time-2.6.jar)
[INFO] ImageClasspath Entry: com.amazonaws:aws-lambda-java-runtime-interface-client:jar:2.0.0:compile (file:///Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-runtime-interface-client/2.0.0/aws-lambda-java-runtime-interface-client-2.0.0.jar)
[INFO] ImageClasspath Entry: com.amazonaws:aws-lambda-java-serialization:jar:1.0.0:compile (file:///Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-serialization/1.0.0/aws-lambda-java-serialization-1.0.0.jar)
[INFO] ImageClasspath Entry: com.sdoroshenko:lambda-application:jar:1.0 (file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar)
[WARNING] jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-events/native-image.properties does not match recommended META-INF/native-image/${groupId}/${artifactId}/native-image.properties layout.
[WARNING] jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-core/native-image.properties does not match recommended META-INF/native-image/${groupId}/${artifactId}/native-image.properties layout.
[WARNING] jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-serialization/native-image.properties does not match recommended META-INF/native-image/${groupId}/${artifactId}/native-image.properties layout.
[WARNING] jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/native-image.properties does not match recommended META-INF/native-image/${groupId}/${artifactId}/native-image.properties layout.
[WARNING] jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/org.sdoroshenko.lambda.application/native-image.properties does not match recommended META-INF/native-image/${groupId}/${artifactId}/native-image.properties layout.
[WARNING] Major.Minor version mismatch between native-image-maven-plugin (21.2.0) and native-image executable (Unknown)
[INFO] Executing: /Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/bin/native-image -cp /Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-core/1.2.1/aws-lambda-java-core-1.2.1.jar:/Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-events/3.8.0/aws-lambda-java-events-3.8.0.jar:/Users/sddorosh/.m2/repository/joda-time/joda-time/2.6/joda-time-2.6.jar:/Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-runtime-interface-client/2.0.0/aws-lambda-java-runtime-interface-client-2.0.0.jar:/Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-serialization/1.0.0/aws-lambda-java-serialization-1.0.0.jar:/Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar --verbose --no-fallback --initialize-at-build-time=org.slf4j --enable-url-protocols=http -H:+AllowIncompleteClasspath -H:Class=com.amazonaws.services.lambda.runtime.api.client.AWSLambda -H:Name=product-binary
Warning: Invalid classpath entry: /Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-runtime-interface-client/2.0.0/aws-lambda-java-core-1.2.0.jar
Warning: Invalid classpath entry: /Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-runtime-interface-client/2.0.0/aws-lambda-java-serialization-1.0.0.jar
Apply jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-events/native-image.properties
Apply jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-core/native-image.properties
Apply jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-serialization/native-image.properties
Apply jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/native-image.properties
Apply jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/org.sdoroshenko.lambda.application/native-image.properties
Apply jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/jni-config.json
Apply jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-events/reflect-config.json
Apply jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-core/reflect-config.json
Apply jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-serialization/reflect-config.json
Apply jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/reflect-config.json
Apply jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/org.sdoroshenko.lambda.application/reflect-config.json
Apply jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/resource-config.json
Apply jar:file:///Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/library-support.jar!/META-INF/native-image/com.oracle.svm/thirdparty/native-image.properties
Apply jar:file:///Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/library-support.jar!/META-INF/native-image/com.oracle.svm/polyglot/native-image.properties
Executing [
HOME=/Users/sddorosh \
'PATH=/Applications/Fortify/Fortify_SCA_and_Apps_21.2.3/bin:/Users/sddorosh/.cargo/bin:/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/bin:/Users/sddorosh/.nvm/versions/node/v14.21.3/bin:/Users/sddorosh/.nvm/versions/node/v14.21.3/bin:/opt/homebrew/opt/ruby@2.7/bin:/usr/local/lib/ruby/gems/3.0.0/bin:/Users/sddorosh/Library/Python/3.8/lib/python/site-packages:/Applications/Visual Studio Code.app/Contents/Resources/app/bin:/Users/sddorosh/.toolbox/bin:/usr/local/opt/ruby/bin:/Users/sddorosh/bin:/usr/local/bin:/Applications/Fortify/Fortify_SCA_and_Apps_21.2.3/bin:/Users/sddorosh/.cargo/bin:/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home/bin:/Users/sddorosh/.nvm/versions/node/v14.21.3/bin:/opt/homebrew/opt/ruby@2.7/bin:/usr/local/lib/ruby/gems/3.0.0/bin:/Users/sddorosh/Library/Python/3.8/lib/python/site-packages:/Applications/Visual Studio Code.app/Contents/Resources/app/bin:/Users/sddorosh/.toolbox/bin:/usr/local/opt/ruby/bin:/Users/sddorosh/bin:/usr/local/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/sddorosh/.cargo/bin' \
PWD=/Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application \
USE_NATIVE_IMAGE_JAVA_PLATFORM_MODULE_SYSTEM=true \
/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/bin/java \
-XX:+UseParallelGC \
-XX:+UnlockExperimentalVMOptions \
-XX:+EnableJVMCI \
-Dtruffle.TrustAllTruffleRuntimeProviders=true \
-Dtruffle.TruffleRuntime=com.oracle.truffle.api.impl.DefaultTruffleRuntime \
-Dgraalvm.ForcePolyglotInvalid=true \
-Dgraalvm.locatorDisabled=true \
-Dsubstratevm.IgnoreGraalVersionCheck=true \
--add-exports=java.base/com.sun.crypto.provider=org.graalvm.nativeimage.builder \
--add-exports=java.base/jdk.internal.access.foreign=org.graalvm.nativeimage.builder \
--add-exports=java.base/jdk.internal.event=org.graalvm.nativeimage.builder \
--add-exports=java.base/jdk.internal.loader=org.graalvm.nativeimage.builder,org.graalvm.truffle \
--add-exports=java.base/jdk.internal.logger=org.graalvm.nativeimage.builder \
--add-exports=java.base/jdk.internal.misc=com.oracle.svm.svm_enterprise,org.graalvm.nativeimage.builder,org.graalvm.nativeimage.objectfile,org.graalvm.nativeimage.pointsto \
--add-exports=java.base/jdk.internal.module=jdk.internal.vm.compiler,org.graalvm.nativeimage.base,org.graalvm.nativeimage.builder \
--add-exports=java.base/jdk.internal.org.objectweb.asm=org.graalvm.nativeimage.builder \
--add-exports=java.base/jdk.internal.perf=org.graalvm.nativeimage.builder \
--add-exports=java.base/jdk.internal.platform=org.graalvm.nativeimage.builder \
--add-exports=java.base/jdk.internal.ref=org.graalvm.nativeimage.builder,org.graalvm.nativeimage.objectfile \
--add-exports=java.base/jdk.internal.reflect=org.graalvm.nativeimage.builder \
--add-exports=java.base/jdk.internal.util=org.graalvm.nativeimage.builder \
--add-exports=java.base/jdk.internal.vm.annotation=org.graalvm.nativeimage.builder \
--add-exports=java.base/jdk.internal.vm=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.invoke.util=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.net=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.nio.ch=org.graalvm.nativeimage.builder,org.graalvm.nativeimage.objectfile \
--add-exports=java.base/sun.reflect.annotation=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.reflect.generics.factory=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.reflect.generics.reflectiveObjects=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.reflect.generics.repository=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.reflect.generics.scope=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.reflect.generics.tree=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.security.jca=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.security.provider=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.security.ssl=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.security.util=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.security.x509=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.text.spi=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.util.calendar=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.util.cldr=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.util.locale.provider=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.util.locale=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.util.resources=org.graalvm.nativeimage.builder \
--add-exports=java.base/sun.util=org.graalvm.nativeimage.builder \
--add-exports=java.management.rmi/com.sun.jmx.remote.internal.rmi=org.graalvm.nativeimage.builder \
--add-exports=java.management.rmi/com.sun.jmx.remote.protocol.rmi=org.graalvm.nativeimage.builder \
--add-exports=java.management/com.sun.jmx.mbeanserver=org.graalvm.nativeimage.builder \
--add-exports=java.management/sun.management=org.graalvm.nativeimage.builder,org.graalvm.nativeimage.pointsto \
--add-exports=java.rmi/sun.rmi.server=org.graalvm.nativeimage.builder \
--add-exports=java.xml.crypto/org.jcp.xml.dsig.internal.dom=org.graalvm.nativeimage.builder \
--add-exports=jdk.httpserver/sun.net.httpserver.simpleserver=org.graalvm.nativeimage.builder \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.aarch64=com.oracle.graal.graal_enterprise,com.oracle.svm.svm_enterprise,jdk.internal.vm.compiler,org.graalvm.nativeimage.builder,org.graalvm.nativeimage.objectfile \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.amd64=com.oracle.graal.graal_enterprise,com.oracle.svm.svm_enterprise,jdk.internal.vm.compiler,org.graalvm.nativeimage.builder,org.graalvm.nativeimage.objectfile \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.code.site=com.oracle.svm.svm_enterprise,jdk.internal.vm.compiler,org.graalvm.nativeimage.builder \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.code.stack=jdk.internal.vm.compiler,org.graalvm.nativeimage.builder \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.code=com.oracle.graal.graal_enterprise,com.oracle.svm.svm_enterprise,jdk.internal.vm.compiler,org.graalvm.nativeimage.builder,org.graalvm.nativeimage.objectfile,org.graalvm.nativeimage.pointsto \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.common=com.oracle.graal.graal_enterprise,com.oracle.svm.svm_enterprise,jdk.internal.vm.compiler,org.graalvm.nativeimage.builder,org.graalvm.nativeimage.pointsto \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.hotspot.aarch64=jdk.internal.vm.compiler \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.hotspot.amd64=jdk.internal.vm.compiler \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.hotspot.riscv64=jdk.internal.vm.compiler \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.hotspot=com.oracle.graal.graal_enterprise,jdk.internal.vm.compiler,org.graalvm.nativeimage.builder,org.graalvm.nativeimage.pointsto \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.meta=com.oracle.graal.graal_enterprise,com.oracle.svm.svm_enterprise,jdk.internal.vm.compiler,org.graalvm.nativeimage.base,org.graalvm.nativeimage.builder,org.graalvm.nativeimage.objectfile,org.graalvm.nativeimage.pointsto \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.riscv64=jdk.internal.vm.compiler \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.runtime=com.oracle.graal.graal_enterprise,jdk.internal.vm.compiler,org.graalvm.nativeimage.builder,org.graalvm.nativeimage.pointsto \
--add-exports=jdk.internal.vm.ci/jdk.vm.ci.services=com.oracle.graal.graal_enterprise,com.oracle.svm.svm_enterprise,jdk.internal.vm.compiler,org.graalvm.nativeimage.builder \
--add-exports=jdk.jfr/jdk.jfr.events=org.graalvm.nativeimage.builder \
--add-exports=jdk.jfr/jdk.jfr.internal.jfc=org.graalvm.nativeimage.builder \
--add-exports=jdk.jfr/jdk.jfr.internal=org.graalvm.nativeimage.builder \
--add-exports=jdk.management.agent/jdk.internal.agent=org.graalvm.nativeimage.builder \
--add-exports=jdk.management/com.sun.management.internal=org.graalvm.nativeimage.builder \
--add-exports=org.graalvm.truffle/com.oracle.truffle.api.object=com.oracle.graal.graal_enterprise \
-XX:+UseJVMCINativeLibrary \
-Xss10m \
-XX:MaxRAMPercentage=40.78822135925293 \
-XX:GCTimeRatio=19 \
-XX:+ExitOnOutOfMemoryError \
-Djava.awt.headless=true \
'-Dorg.graalvm.vendor=Oracle Corporation' \
-Dorg.graalvm.vendorurl=https://www.graalvm.org/ \
'-Dorg.graalvm.vendorversion=Oracle GraalVM 20.0.1+9.1' \
-Dorg.graalvm.version=23.0.0 \
-Dcom.oracle.graalvm.isaot=true \
-Djava.system.class.loader=com.oracle.svm.hosted.NativeImageSystemClassLoader \
-Xshare:off \
-Djdk.internal.lambda.disableEagerInitialization=true \
-Djdk.internal.lambda.eagerlyInitialize=false \
-Djava.lang.invoke.InnerClassLambdaMetafactory.initializeLambdas=false \
--add-modules=ALL-DEFAULT \
--module-path \
/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/truffle/truffle-api.jar:/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/builder/svm.jar:/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/builder/native-image-base.jar:/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/builder/objectfile.jar:/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/builder/svm-enterprise.jar:/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/builder/pointsto.jar \
--module \
org.graalvm.nativeimage.builder/com.oracle.svm.hosted.NativeImageGeneratorRunner \
-imagecp \
/Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-core/1.2.1/aws-lambda-java-core-1.2.1.jar:/Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-events/3.8.0/aws-lambda-java-events-3.8.0.jar:/Users/sddorosh/.m2/repository/joda-time/joda-time/2.6/joda-time-2.6.jar:/Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-runtime-interface-client/2.0.0/aws-lambda-java-runtime-interface-client-2.0.0.jar:/Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-runtime-interface-client/2.0.0/aws-lambda-java-core-1.2.0.jar:/Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-runtime-interface-client/2.0.0/aws-lambda-java-serialization-1.0.0.jar:/Users/sddorosh/.m2/repository/com/amazonaws/aws-lambda-java-serialization/1.0.0/aws-lambda-java-serialization-1.0.0.jar:/Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar \
-imagemp \
/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/graal-microservices.jar:/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/library-support.jar \
-H:CLibraryPath=/Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/clibraries/darwin-aarch64 \
-H:Path=/Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target \
'-H:ReflectionConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-events/native-image.properties=META-INF/native-image/com.amazonaws/aws-lambda-java-events/reflect-config.json' \
'-H:ReflectionConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-core/native-image.properties=META-INF/native-image/com.amazonaws/aws-lambda-java-core/reflect-config.json' \
'-H:ReflectionConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-serialization/native-image.properties=META-INF/native-image/com.amazonaws/aws-lambda-java-serialization/reflect-config.json' \
'-H:ClassInitialization@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/native-image.properties=jdk.xml.internal.SecuritySupport:build_time' \
'-H:ReflectionConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/native-image.properties=META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/reflect-config.json' \
'-H:JNIConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/native-image.properties=META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/jni-config.json' \
'-H:ResourceConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/native-image.properties=META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/resource-config.json' \
'-H:EnableURLProtocols@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/org.sdoroshenko.lambda.application/native-image.properties=http,https' \
'-H:ReflectionConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/org.sdoroshenko.lambda.application/native-image.properties=META-INF/native-image/org.sdoroshenko.lambda.application/reflect-config.json' \
'-H:JNIConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/jni-config.json=META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/jni-config.json' \
'-H:ReflectionConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-events/reflect-config.json=META-INF/native-image/com.amazonaws/aws-lambda-java-events/reflect-config.json' \
'-H:ReflectionConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-core/reflect-config.json=META-INF/native-image/com.amazonaws/aws-lambda-java-core/reflect-config.json' \
'-H:ReflectionConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-serialization/reflect-config.json=META-INF/native-image/com.amazonaws/aws-lambda-java-serialization/reflect-config.json' \
'-H:ReflectionConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/reflect-config.json=META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/reflect-config.json' \
'-H:ReflectionConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/org.sdoroshenko.lambda.application/reflect-config.json=META-INF/native-image/org.sdoroshenko.lambda.application/reflect-config.json' \
'-H:ResourceConfigurationResources@jar:file:///Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar!/META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/resource-config.json=META-INF/native-image/com.amazonaws/aws-lambda-java-runtime-interface-client/resource-config.json' \
-H:FallbackThreshold=0 \
-H:ClassInitialization=org.slf4j:build_time \
-H:EnableURLProtocols=http \
-H:+AllowIncompleteClasspath \
-H:Class=com.amazonaws.services.lambda.runtime.api.client.AWSLambda \
-H:Name=product-binary \
'-H:Features@jar:file:///Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/library-support.jar!/META-INF/native-image/com.oracle.svm/thirdparty/native-image.properties=com.oracle.svm.thirdparty.gson.GsonFeature' \
'-H:Features@jar:file:///Library/Java/JavaVirtualMachines/graalvm-jdk-20.0.1+9.1/Contents/Home/lib/svm/library-support.jar!/META-INF/native-image/com.oracle.svm/polyglot/native-image.properties=com.oracle.svm.polyglot.groovy.GroovyIndyInterfaceFeature,com.oracle.svm.polyglot.scala.ScalaFeature' \
-H:+BuildOutputColorful \
-H:+BuildOutputProgress \
-H:+BuildOutputLinks
]
========================================================================================================================
GraalVM Native Image: Generating 'product-binary' (executable)...
========================================================================================================================
Warning: Could not resolve class jdk.internal.module.IllegalAccessLogger for reflection configuration. Reason: java.lang.ClassNotFoundException: jdk.internal.module.IllegalAccessLogger.
Warning: Could not resolve class jdk.internal.module.IllegalAccessLogger for reflection configuration. Reason: java.lang.ClassNotFoundException: jdk.internal.module.IllegalAccessLogger.
[1/8] Initializing...                                                                                   (22.7s @ 0.19GB)
 Java version: 20.0.1+9, vendor version: Oracle GraalVM 20.0.1+9.1
 Graal compiler: optimization level: 2, target machine: armv8-a, PGO: off
 C compiler: cc (apple, arm64, 15.0.0)
 Garbage collector: Serial GC (max heap size: 80% of RAM)
[2/8] Performing analysis...  [*****]                                                                   (12.5s @ 1.31GB)
   7,292 (84.63%) of  8,616 types reachable
  10,580 (59.62%) of 17,747 fields reachable
  40,512 (59.50%) of 68,084 methods reachable
   2,228 types,   165 fields, and 1,852 methods registered for reflection
      63 types,    66 fields, and    72 methods registered for JNI access
       5 native libraries: -framework CoreServices, -framework Foundation, dl, pthread, z
[3/8] Building universe...                                                                               (2.0s @ 0.94GB)
[4/8] Parsing methods...      [*]                                                                        (1.7s @ 1.32GB)
[5/8] Inlining methods...     [***]                                                                      (0.5s @ 2.16GB)
[6/8] Compiling methods...    [*****]                                                                   (25.3s @ 3.29GB)
[7/8] Layouting methods...    [**]                                                                       (2.3s @ 4.16GB)
[8/8] Creating image...       [**]                                                                       (3.1s @ 1.10GB)
  20.93MB (52.29%) for code area:    22,761 compilation units
  18.45MB (46.09%) for image heap:  252,113 objects and 11 resources
 665.97kB ( 1.62%) for other data
  40.04MB in total
------------------------------------------------------------------------------------------------------------------------
Top 10 origins of code area:                                Top 10 object types in image heap:
  13.11MB java.base                                            4.38MB byte[] for code metadata
   3.15MB aws-lambda-java-serialization-1.0.0.jar              2.63MB byte[] for embedded resources
   2.70MB svm.jar (Native Image)                               1.92MB byte[] for java.lang.String
 365.19kB java.rmi                                             1.67MB java.lang.String
 270.29kB jdk.crypto.ec                                        1.66MB byte[] for general heap data
 239.23kB java.naming                                          1.49MB java.lang.Class
 197.30kB com.oracle.svm.svm_enterprise                      439.34kB byte[] for reflection metadata
 166.01kB java.logging                                       411.19kB java.util.concurrent.ConcurrentHashMap$Node
 124.84kB jdk.naming.dns                                     341.81kB com.oracle.svm.core.hub.DynamicHubCompanion
 121.43kB aws-lambda-java-runtime-interface-client-2.0.0.jar 305.52kB java.lang.Object[]
 399.25kB for 19 more packages                                 2.86MB for 1910 more object types
------------------------------------------------------------------------------------------------------------------------
Recommendations:
 PGO:  Use Profile-Guided Optimizations ('--pgo') for improved throughput.
 HEAP: Set max heap for improved and more predictable memory usage.
 CPU:  Enable more CPU features with '-march=native' for improved performance.
 QBM:  Use the quick build mode ('-Ob') to speed up builds during development.
 BRPT: Try out the new build reports with '-H:+BuildReport'.
------------------------------------------------------------------------------------------------------------------------
                        2.7s (3.7% of total time) in 50 GCs | Peak RSS: 5.52GB | CPU load: 5.39
------------------------------------------------------------------------------------------------------------------------
Produced artifacts:
 /Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/product-binary (executable)
========================================================================================================================
Finished generating 'product-binary' in 1m 11s.
[INFO] 
[INFO] --- assembly:3.3.0:single (zip-assembly) @ lambda-application ---
[WARNING]  Parameter 'finalName' is read-only, must not be used in configuration
[INFO] Reading assembly descriptor: src/assembly/zip.xml
[INFO] Building zip: /Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/function.zip
[INFO] 
[INFO] --- install:3.1.1:install (default-install) @ lambda-application ---
[INFO] Installing /Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/pom.xml to /Users/sddorosh/.m2/repository/com/sdoroshenko/lambda-application/1.0/lambda-application-1.0.pom
[INFO] Installing /Users/sddorosh/Documents/Personal/projects/lambda-with-graalvm/lambda-application/target/lambda-application-1.0.jar to /Users/sddorosh/.m2/repository/com/sdoroshenko/lambda-application/1.0/lambda-application-1.0.jar
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  01:16 min
[INFO] Finished at: 2023-12-10T11:35:20+01:00
[INFO] ------------------------------------------------------------------------
```
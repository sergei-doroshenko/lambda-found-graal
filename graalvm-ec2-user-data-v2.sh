#!/bin/bash
# Use this for your user data (script from top to bottom)
# install httpd (Linux 2 version)
yum update -y
yum install -y tar unzip gzip bzip2-devel ed gcc gcc-c++ gcc-gfortran \
    less libcurl-devel openssl openssl-devel readline-devel xz-devel \
    zlib-devel glibc-static libcxx libcxx-devel llvm-toolset-7 zlib-static \
    && rm -rf /var/cache/yum

curl -4 -L https://github.com/graalvm/graalvm-ce-builds/releases/download/vm-22.3.0/graalvm-ce-java11-linux-amd64-22.3.0.tar.gz | tar -xvz
mv graalvm-ce-java11-22.3.0 /usr/lib/graalvm
rm -rf graalvm-ce-java11-22.3.0

# Graal maven plugin requires Maven 3.3.x
curl -4 -L https://mirrors.ukfast.co.uk/sites/ftp.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz | tar -xvz
mv apache-maven-3.6.3 /usr/lib/maven
rm -rf apache-maven-3.6.3

# Gradle
curl -LO https://downloads.gradle-dn.com/distributions/gradle-7.4.1-bin.zip
unzip gradle-7.4.1-bin.zip
mv gradle-7.4.1 /usr/lib/gradle
rm -rf gradle-7.4.1

/usr/lib/graalvm/bin/gu install native-image
ln -s /usr/lib/graalvm/bin/native-image /usr/bin/native-image
ln -s /usr/lib/maven/bin/mvn /usr/bin/mvn
ln -s /usr/lib/gradle/bin/gradle /usr/bin/gradle

JAVA_HOME=/usr/lib/graalvm

echo $JAVA_HOME
#!/bin/bash
# Use this for your user data (script from top to bottom)
# install httpd (Linux 2 version)
yum update -y
yum install -y tar unzip gzip bzip2-devel ed gcc gcc-c++ gcc-gfortran \
    less libcurl-devel openssl openssl-devel readline-devel xz-devel \
    zlib-devel glibc-static libcxx libcxx-devel llvm-toolset-7 zlib-static \
    && rm -rf /var/cache/yum

GRAAL_VERSION=22.3.0
GRAAL_FOLDERNAME=graalvm-ce-java11-${GRAAL_VERSION}
GRAAL_FILENAME=graalvm-ce-java11-linux-amd64-${GRAAL_VERSION}.tar.gz
curl -4 -L https://github.com/graalvm/graalvm-ce-builds/releases/download/vm-${GRAAL_VERSION}/${GRAAL_FILENAME} | tar -xvz
mv $GRAAL_FOLDERNAME /usr/lib/graalvm
rm -rf $GRAAL_FOLDERNAME

# Graal maven plugin requires Maven 3.3.x
MVN_VERSION=3.6.3
MVN_FOLDERNAME=apache-maven-${MVN_VERSION}
MVN_FILENAME=apache-maven-${MVN_VERSION}-bin.tar.gz
curl -4 -L https://mirrors.ukfast.co.uk/sites/ftp.apache.org/maven/maven-3/${MVN_VERSION}/binaries/${MVN_FILENAME} | tar -xvz
mv $MVN_FOLDERNAME /usr/lib/maven
rm -rf $MVN_FOLDERNAME

# Gradle
GRADLE_VERSION=7.4.1
GRADLE_FOLDERNAME=gradle-${GRADLE_VERSION}
GRADLE_FILENAME=gradle-${GRADLE_VERSION}-bin.zip
curl -LO https://downloads.gradle-dn.com/distributions/${GRADLE_FILENAME}
unzip gradle-${GRADLE_VERSION}-bin.zip
mv $GRADLE_FOLDERNAME /usr/lib/gradle
rm -rf $GRADLE_FOLDERNAME

/usr/lib/graalvm/bin/gu install native-image
ln -s /usr/lib/graalvm/bin/native-image /usr/bin/native-image
ln -s /usr/lib/maven/bin/mvn /usr/bin/mvn
ln -s /usr/lib/gradle/bin/gradle /usr/bin/gradle

JAVA_HOME=/usr/lib/graalvm

echo $JAVA_HOME
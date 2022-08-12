#define base docker image
FROM openjdk:17
LABEL maintainer="springbootApp.net"
ADD target/demo-0.0.1-SNAPSHOT.jar fullstack-demo.jar
ENTRYPOINT ["java", "-jar", "fullstack-demo.jar"]


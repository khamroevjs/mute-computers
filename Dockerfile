FROM amazoncorretto:17-alpine
ADD /build/libs/mute-computers-1.0.0.jar mute-computers.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "mute-computers.jar"]
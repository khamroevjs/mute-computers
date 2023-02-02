FROM amazoncorretto:17-alpine AS builder
COPY . /project/
WORKDIR /project/
RUN ./gradlew bootJar --configure-on-demand && \
    # extracting jar-file
    java -Djarmode=layertools -jar ./build/libs/mute-computers-1.0.0.jar extract && \
    # analyzing all dependencies
    jdeps --multi-release 17 --class-path 'dependencies/BOOT-INF/lib/*' --ignore-missing-deps --recursive  \
    --print-module-deps ./build/libs/mute-computers-1.0.0.jar > jre-deps.info && \
    # required by jlink for --strip-debug to work
    apk add --no-cache binutils && \
    # creating custom JRE and adding `jdk.crypto.ec` module manually
    jlink --strip-debug --no-man-pages --compress=2 --no-header-files --add-modules jdk.crypto.ec,$(cat jre-deps.info) --output /custom-jre

# main app image
FROM alpine
ENV JAVA_HOME=/custom-jre
ENV PATH="${JAVA_HOME}/bin:${PATH}"

# copy JRE from the base image
COPY --from=builder /custom-jre $JAVA_HOME

# copy jar-file from the base image
COPY --from=builder /project/build/libs/mute-computers-1.0.0.jar .

EXPOSE 8080
CMD ["java", "-jar", "mute-computers-1.0.0.jar"]

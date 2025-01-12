# Use an official Gradle image as the build environment
FROM gradle:7.4.2-jdk17 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the Gradle wrapper and build files
COPY gradle/wrapper/ gradle/wrapper/
COPY gradlew build.gradle settings.gradle /app/

# Download and cache Gradle dependencies
RUN ./gradlew --no-daemon build

# Copy the entire project into the container
COPY . .

# Build the application
RUN ./gradlew build --no-daemon

# Use OpenJDK 17 as the runtime environment
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the built jar from the builder stage
COPY --from=builder /app/build/libs/*.jar app.jar

# Expose the port that the Spring Boot app will run on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]

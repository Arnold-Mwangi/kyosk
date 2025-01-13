# Use an official OpenJDK runtime as a base image
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the built .jar file from Gradle build (assumes 'build/libs' folder)
COPY build/libs/server-0.0.1-SNAPSHOT.jar /app/server.jar

# Expose the port your application will run on
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "server.jar"]

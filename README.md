# **Kyosk Deployment Documentation**

This documentation provides a comprehensive guide for setting up, containerizing, and deploying the Kyosk project using Docker Compose and Kubernetes (Minikube). It covers all steps from installation to accessing the running services.

---

## **Table of Contents**
1. [Prerequisites](#prerequisites)  
2. [Project Structure](#project-structure)  
3. [Running the Application with Docker Compose](#running-the-application-with-docker-compose)  
4. [Installing Minikube](#installing-minikube)  
5. [Setting Up Minikube](#setting-up-minikube)  
6. [Deploying the Application on Minikube](#deploying-the-application-on-minikube)  
7. [Accessing the Services](#accessing-the-services)  
8. [Troubleshooting](#troubleshooting)  

---

## **1. Prerequisites**

Ensure you have the following installed on your machine:  
- **Docker** (v27.1.1 or higher)  
- **kubectl** (Kubernetes command-line tool)  
- **Minikube** (Local Kubernetes cluster)  
- **Java** (For the backend server)  

To verify your installations:

```bash
# Check Docker version
docker --version
 --version
```

```bash
# Check kubectl version
kubectl version --client
```
```bash
# Check Minikube version
minikube version
```


## **2. Project Structure**
The project consists of three main components:

client: A Next.js frontend application
server: A Spring Boot backend application
database: A PostgreSQL database
Directory Structure

```plaintext
kyosk/
├── client/
│   └── Dockerfile
├── server/
│   └── Dockerfile
├── k8s/
│   └── manifests/
│       ├── client-deployment.yaml
│       ├── client-service.yaml
│       ├── server-deployment.yaml
│       ├── server-service.yaml
│       └── database-deployment.yaml
│       └── database-service.yaml
└── docker-compose.yaml
```


## **3. Running the Application with Docker Compose**
Navigate to the project root directory:

```bash
cd kyosk
```

**Build and start the services using Docker Compose:**
```bash
docker-compose up --build```


**Verify that all services are running:**

```bash
docker-compose ps
```
Access client/frontend
```bash
http://localhost:3000
```
Access backend/server (GET/POST)

```bash
http://localhost:8080/ap1/v1/books
```


## **5. Deploy on Minikube Minikube**
**Manual Installation**

--Remove any existing Minikube installations:

```bash
sudo rm -rf ~/.minikube /usr/local/bin/minikube
```

Download and install Minikube:
```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

Verify the installation:
```bash
minikube version
```
## **6. Setting Up Minikube**
Start Minikube using the Docker driver:
```bash
minikube start --driver=docker
```


## **7. Deploying the Application on Minikube**
Apply the manifests:
cd to manifest scripts folder

```bash
cd k8s
```
**Apply the kebernetes manifests**
```bash
          kubectl apply -f database-deployment.yaml
          kubectl apply -f database-service.yaml
          kubectl apply -f server-deployment.yaml
          kubectl apply -f server-service.yaml
          kubectl apply -f client-deployment.yaml
          kubectl apply -f client-service.yaml
```
When you apply Kubernetes manifests, the manifests specify the Docker images to be used for the containers. Kubernetes will pull these images from Docker Hub (or any specified container registry) when creating the pods.


**Verify that all pods and services are running:**

```bash
kubectl get pods
kubectl get services
```
**Check logs for any pod:**

```bash
kubectl logs <pod-name>
```
## **9. Accessing the Services**
Get Minikube IP
```bash
minikube ip
```
Example output:

```bash
192.168.49.2
```

Access Client Service
Open your browser and go to:

```bash
http://<minikube-ip>:<node-port>
```
Example:

```bash
http://192.168.49.2:32257
```
**Access Server Service**
Open your browser and go to:

```bash
http://<minikube-ip>:30325
```
OR

**Run the services using minikube commands**
Example:

```bash
minikube service <service-name>
```

```bash 
 minikube service client-service```



10. **Troubleshooting and checking Pod Logs:**
```bash
kubectl logs <pod-name>
```
Describe Pods or Services:

```bash
kubectl describe pod <pod-name>
kubectl describe service <service-name>
```
List Events:

```bash
kubectl get events
```
You're All Set! 🎉
This documentation ensures you can deploy, run, and manage the Kyosk project using both Docker Compose and Kubernetes (Minikube). Happy coding! 😊
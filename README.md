# Weatherapp

## Deployed on GCP GKE
The weather app is deployed on Google Cloud: http://34.95.87.218/.

The frontend and Backend images are built and pushed to container registry. This is followed by the creation of a GKE cluster using Terraform. The cluster has 3 nodes.
Kubectl is configured with the cluster to run the kubectl commands.

kubernetes deployment object is used to deploy the pods on the nodes. Kubernetes LoadBalancer service object is used to expose the frontend and access the Backend.

Used **GKE ingress** to act as a reverse proxy. It prevents the services from being directly accessed from outside the cluster. GKE has a default LoadBalancer controller for ingress. The request is made to the ingress external IP and using the URL it diverts the traffic to the corresponding service.
The  deployment, services and ingress can be found [here](https://github.com/zarawajid95/weather-app/tree/main/gpc-deployment)


## Deployed on AWS
It is also deployed on an AWS using Ansible: http://52.34.59.111:8000/

* Using Ansible Playbooks and Roles Docker is installed on a remote machine 

* The IP and private key are stored in the default inventory

* The private key is used to ssh into the EC2 instance 

* AWSCLI is installed in the machine using Ansible 

* Authentication is done using the secret access key assigned to an IAM user.

* Ansible is used to authenticate to the ECR

* Frontend and Backend images pushed in the ECR are pulled and containers are started

* A security group is attached to the instance to allow incoming HTTP traffic on port 8000

## Instructions to run the Weatherapp

### Prerequisites
* Clone the repository
* `cd backend`
* add your [openweathermap](http://openweathermap.org/) API key to the .env file located in backend directory

### Run App Locally
* `cd backend`
* `npm i && npm start`
* `cd frontend`
* `npm i && npm start`

### Run App using Docker
* Install [Docker](https://www.docker.com/) and [docker compose](https://docs.docker.com/compose/)
* Go to the root of the directory: `cd weatherapp`
* `docker-compose up`
* visit http://localhost:8000/

## Exercises Completed

### Docker

* [x] Add **Dockerfile**'s in the *frontend* and the *backend* directories to run them virtually on any environment having [docker](https://www.docker.com/) installed. It should work by saying e.g. `docker build -t weatherapp_backend . && docker run --rm -i -p 9000:9000 --name weatherapp_backend -t weatherapp_backend`. If it doesn't, remember to check your api key first.

* [x] Add a **docker-compose.yml** -file connecting the frontend and the backend, enabling running the app in a connected set of containers.

* [x] The developers are still keen to run the app and its pipeline on their own computers. Share the development files for the container by using volumes, and make sure the containers are started with a command enabling hot reload.

### Node and React development

* [x] The application now only reports the current weather. It should probably report the forecast e.g. a few hours from now. (tip: [openweathermap api](https://openweathermap.org/forecast5))

* [x] There are [eslint](http://eslint.org/) errors. Sloppy coding it seems. Please help.

### Cloud

* [x] Set up the weather service in a free cloud hosting service, e.g. [AWS](https://aws.amazon.com/free/) or [Google Cloud](https://cloud.google.com/free/).

### Infrastructure as a code and Automation

* [x] Use Terraform to create a cluster on GKE 
* [x] Use Ansible to Deploy the Application on Cloud 

### Documentation

* [x] Remember to update the README

* [x] Use descriptive names and add comments in the code when necessary

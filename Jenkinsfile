pipeline {
    agent any
    environment {     
        DOCKERHUB_CREDENTIALS= credentials('jagseersingh')     
        DOCKER_IMAGE_NAME = 'jagseersingh/food-delivery-app:latest'
        SERVER_REMOTE_HOST = '3.144.240.118'
        SERVER_REMOTE_USER = 'ubuntu'
        SSH_KEY = credentials('food-delivery-app')
    }   
    stages {
        stage('Checkout') {
            steps {
                sh 'git status'
            }
        }
        stage('Build the docker image') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE_NAME} .'
            }
        }
        stage('Login to Docker Hub') {         
            steps{                            
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'                 
                echo 'Login Completed'                
            }           
        }
        stage('Push Image to Docker Hub') {         
            steps{                            
                sh 'sudo docker push ${DOCKER_IMAGE_NAME}'                 
                echo 'Push Image Completed'       
            }           
        }
        stage('Login to server') {
            steps {
                script {
                    sh '''
                        #!/bin/bash
                        # Log in to the server using SSH
                        sudo ssh -o StrictHostKeyChecking=no -i "$SSH_KEY" $SERVER_REMOTE_USER@$SERVER_REMOTE_HOST

                        # Check if the repository already exists in the workspace
                        if [ ! -d "food-delivery" ]; then
                            # Clone the repository if it doesn't exist
                            git clone your_git_repository_url food-delivery
                        else
                            # Pull the latest changes if the repository already exists
                            cd food-delivery && git pull origin main
                        fi
                    '''
                }
            }
        }
    }
    post{
        always {  
            sh 'docker logout'           
        }      
    } 
}

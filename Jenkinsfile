pipeline {
    agent any
    environment {     
        DOCKERHUB_CREDENTIALS= credentials('jagseersingh')     
        DOCKER_IMAGE_NAME = 'js-talentelgia/food-delivery-app:latest'
    }   
    stages {
        stage('Checkout') {
            steps {
                sh 'git status'
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE_NAME} .'
            }
        }
        stage('Login to Docker Hub') {         
            steps{                            
                sh '''echo $DOCKERHUB_CREDENTIALS_PSW | sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
                      sudo docker push ${DOCKER_IMAGE_NAME}'''                 
                echo 'Login Completed'                
            }           
        }    
    }
    post{
        always {  
            sh 'docker logout'           
        }      
    } 
}

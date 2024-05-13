pipeline {
    agent any
    environment {     
        DOCKERHUB_CREDENTIALS= credentials('jagseersingh')     
    }   
    stages {
        stage('Checkout') {
            steps {
                sh 'git status'
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t js-talentelgia/food-delivery-app:latest .'
            }
        }
        stage('Login to Docker Hub') {         
            steps{                            
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'                 
                echo 'Login Completed'                
            }           
        }  
    }
}

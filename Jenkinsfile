pipeline {
    agent any

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
    }
}

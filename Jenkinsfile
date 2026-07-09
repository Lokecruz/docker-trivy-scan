pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t simple-node-app .'
            }
        }

        stage('Check Trivy') {
            steps {
                bat 'trivy --version'
            }
        }

        stage('Scan Image') {
            steps {
                bat 'trivy image simple-node-app'
            }
        }
    }
}

pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t simple-node-app .'
            }
        }

        stage('Scan Image') {
            steps {
                bat 'trivy image simple-node-app'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d --name simple-node-app -p 8081:8080 simple-node-app'
            }
        }
    }
}

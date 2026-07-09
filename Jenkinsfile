pipeline {
    agent any

    environment {
        IMAGE_NAME = "trivy-demo"
        IMAGE_TAG  = "1.0"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Lokecruz/docker-trivy-scan.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Using double quotes allows Jenkins to inject the variables perfectly
                bat "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Trivy Image Scan') {
            steps {
                // Using double quotes and the proper Windows multi-line caret (^) symbol
                bat """
                trivy image ^
                  --scanners vuln ^
                  --severity HIGH,CRITICAL ^
                  ${IMAGE_NAME}:${IMAGE_TAG}
                """
            }
        }
    }

    post {
        always {
            bat 'docker images'
        }
    }
}

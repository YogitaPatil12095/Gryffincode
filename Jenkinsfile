pipeline {
    agent any

    environment {
        IMAGE_NAME = "vulnerable-app"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo 'Code already checked out from SCM'
                git branch: 'vulnerable-app',
                    url: 'https://github.com/YogitaPatil12095/Gryffincode.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Dependency Vulnerability Scan (npm audit)') {
            steps {
                sh 'npm audit --audit-level=high'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }

    }

    post {
        failure {
            echo '❌ Pipeline failed due to vulnerabilities'
        }
        success {
            echo '✅ Build completed successfully'
        }
    }
}

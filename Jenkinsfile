pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-p 3000:3000'
        }
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                sh "npm install"
                echo "Building ..."
            }
        }
        stage('Test') {
            steps {
                sh "npm test"
                echo "Testing ..."
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
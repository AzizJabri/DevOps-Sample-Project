pipeline {
    agent any
    tools {
        nodejs "node"
    }
    environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                bat "npm install"
                echo "Building ..."
            }
        }
        stage('Test') {
            steps {
                bat "npm test"
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
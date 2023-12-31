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
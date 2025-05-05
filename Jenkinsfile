pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/CamiloMendez23/ProyectoSIS312.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Building JavaScript application"'
            }
        }
        stage('Deploy Locally') {
            steps {
                sh 'nohup npm start &'
                sh 'sleep 5'
                sh 'curl -f http://host.docker.internal:8000 || echo "Deployment check failed"'
            }
        }
    }
    post {
        always {
            sh 'pkill -f http-server || echo "No http-server process to kill"'
        }
    }
}
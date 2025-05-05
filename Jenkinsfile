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
                sh 'chmod -R +x node_modules/.bin/*' // Add executable permissions
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
                sh 'curl -f http://localhost:8000 || exit 1' // Fail pipeline if curl fails
            }
        }
    }
    post {
        always {
            sh 'pkill -f http-server || echo "No http-server process to kill"'
        }
    }
}
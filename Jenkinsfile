pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Obtener el código del repositorio
                git branch: 'main', url: 'https://github.com/CamiloMendez23/ProyectoSIS312.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Construir la imagen Docker
                    sh 'docker build -t mi-frontend .'
                }
            }
        }
        
        stage('Run Docker Container') {
            steps {
                script {
                    // Ejecutar la imagen Docker
                    sh 'docker run -d -p 3000:80 mi-frontend'
                }
            }
        }
        
        stage('Clean Up') {
            steps {
                script {
                    // Eliminar el contenedor después de la prueba
                    sh 'docker stop $(docker ps -q --filter ancestor=mi-frontend)'
                    sh 'docker rm $(docker ps -aq --filter ancestor=mi-frontend)'
                }
            }
        }
    }
}

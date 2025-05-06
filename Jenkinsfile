pipeline {
    agent any

    stages {
        stage('Clonar código') {
            steps {
                git branch: 'main', url: 'https://github.com/CamiloMendez23/ProyectoSIS312.git'
            }
        }

        stage('Verificar Docker') {
            steps {
                echo 'Verificando Docker en Jenkins'
                sh 'docker --version'
            }
        }

        stage('Copiar frontend a carpeta compartida') {
            steps {
                echo 'Copiando archivos del frontend a carpeta compartida'
                sh 'mkdir -p /var/jenkins_home/nginx_output && cp -r * /var/jenkins_home/nginx_output/'
            }
        }

        stage('Levantar servidor Nginx') {
            steps {
                echo 'Iniciando servidor web con Docker usando frontend copiado'
                sh 'docker run -d -p 8082:80 -v /var/jenkins_home/nginx_output:/usr/share/nginx/html:ro nginx'
            }
        }
    }
}

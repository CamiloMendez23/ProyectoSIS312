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
                sh 'cp -r * /nginx_output/'
            }
        }

        stage('Levantar servidor Nginx') {
            steps {
                echo 'Iniciando servidor Nginx'
                sh 'docker run -d -p 8082:80 -v C:/nginx_html:/usr/share/nginx/html:ro nginx'
            }
        }
    }
}

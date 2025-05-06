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

        stage('Instalar servidor') {
            steps {
                echo 'Iniciando servidor web local con Docker'
                sh 'docker run -d -p 8081:80 -v $PWD:/usr/share/nginx/html:ro nginx'
            }
        }
    }
}

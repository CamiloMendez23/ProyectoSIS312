pipeline {
    agent any

    stages {
        stage('Clonar código') {
            steps {
                git branch: 'main', url: 'https://github.com/CamiloMendez23/ProyectoSIS312.git'

            }
        }

        stage('Instalar servidor') {
            steps {
                echo 'Iniciando servidor web local con Docker'
                sh 'docker run -d -p 8080:80 -v $WORKSPACE:/usr/share/nginx/html:ro nginx'
            }
        }
    }
}

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
                sh '''
                    mkdir -p /var/jenkins_home/nginx_output
                    cp index.html styles.css script.js /var/jenkins_home/nginx_output/
                    ls -la /var/jenkins_home/nginx_output
                '''
            }
        }

        stage('Levantar servidor Nginx') {
            steps {
                echo 'Iniciando servidor web con Docker usando frontend copiado'
                sh '''
                    docker stop nginx-container || true
                    docker rm nginx-container || true
                    docker run -d --name nginx-container -p 8084:80 -v /var/jenkins_home/nginx_output:/usr/share/nginx/html:ro nginx
                '''
            }
        }

        stage('Verificar despliegue') {
            steps {
                echo 'Verificando que el servidor está corriendo'
                sh '''
                    sleep 5
                    curl -f http://localhost:8084/ || exit 1
                '''
            }
        }
    }
}
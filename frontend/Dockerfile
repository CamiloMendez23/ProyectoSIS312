FROM jenkins/jenkins:lts

# Instalar Docker dentro del contenedor
USER root
RUN apt-get update && apt-get install -y docker.io

# Cambiar al usuario 'jenkins' después de instalar Docker (opcional)
USER jenkins

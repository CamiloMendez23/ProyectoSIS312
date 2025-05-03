FROM jenkins/jenkins:lts

# Instalar Git en el contenedor
USER root
RUN apt-get update && apt-get install -y git

# Cambiar al usuario de Jenkins para continuar con la configuración
USER jenkins

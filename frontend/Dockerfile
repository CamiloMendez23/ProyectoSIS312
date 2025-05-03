FROM jenkins/jenkins:lts

USER root

# Instala Docker CLI y establece permisos
RUN apt-get update && \
    apt-get install -y docker.io && \
    usermod -aG docker jenkins && \
    mkdir -p /.docker && \
    chown -R jenkins:docker /.docker && \
    chmod -R 775 /.docker

# Configura el socket Docker
RUN echo "jenkins ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers && \
    chmod 777 /var/run/docker.sock

USER jenkins
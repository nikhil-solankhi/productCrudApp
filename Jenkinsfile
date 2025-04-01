pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_CMD = 'docker-compose up --build'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/nikhil-solankhi/productCrudApp.git'
            }
        }

        stage('Build & Start Services') {
            steps {
                script {
                    sh "$DOCKER_COMPOSE_CMD"
                }
            }
        }

        stage('Run Backend Tests') {
            steps {
                script {
                    sh 'docker exec spring_backend mvn test'
                }
            }
        }

        stage('Run Frontend Tests') {
            steps {
                script {
                    sh 'docker exec react_frontend npm test'
                }
            }
        }

        stage('Deployment') {
            steps {
                echo "Application deployed successfully!"
            }
        }
    }
}

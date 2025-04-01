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
        
        stage('Update NPM') {
            steps {
                script {
                    // Update NPM to the latest version
                    sh 'npm install -g npm@latest'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    // Build the backend using Maven (from the backend directory)
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build & Start Services') {
            steps {
                script {
                    // Start all services using docker-compose (including MySQL and backend)
                    sh "$DOCKER_COMPOSE_CMD"
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


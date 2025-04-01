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

        stage('Build Backend') {
            steps {
                dir('backend') {
                    script {
                        sh 'mvn clean package -DskipTests'
                        sh 'ls -lh target/' // Verify the JAR file is created
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('redux_frontend') {
                    script {
                        sh 'npm cache clean --force'
                        sh 'rm -rf node_modules package-lock.json'
                        sh 'npm install -g npm@9' // Ensure latest NPM version
                        sh 'npm ci' // Install dependencies cleanly
                        sh 'npm run build' // Build React app
                    }
                }
            }
        }

        stage('Build & Start Services') {
            steps {
                script {
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


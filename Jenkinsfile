pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_CMD = 'docker-compose up --build -d'
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
                        sh 'ls -lh target/'
                    }
                }
            }
        }

        stage('Verify NPM') {
            steps {
                sh 'npm -v'
                sh 'node -v'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('redux_frontend') {
                    script {
                        sh 'npm cache clean --force'
                        sh 'rm -rf node_modules'
                        sh '[ -f package-lock.json ] && npm ci || npm install'
                        sh 'npm run build'
                        sh 'ls -lh build/'
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
                echo "✅ Application deployed successfully!"
            }
        }
    }

    post {
        always {
            echo '🧹 Cleaning up Docker containers...'
            sh 'docker-compose down'
        }
    }
}

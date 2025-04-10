pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_CMD = 'docker-compose up --build --force-recreate'
        NPM_GLOBAL_PATH = "$HOME/.npm-global/bin"
    }

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs() // Cleans up the workspace more gracefully
            }
        }

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

        stage('Verify NPM') {
            steps {
                sh 'npm -v || echo "npm not found"'
                sh 'node -v || echo "node not found"'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('redux_frontend') {
                    script {
                        sh '''
                            rm -rf node_modules package-lock.json
                            npm install
                            npm run build
                            ls -lh build/
                        '''
                    }
                }
            }
        }

        stage('Build & Start Services') {
            steps {
                script {
                    // This may fail if Jenkins doesn't have permission to access Docker socket
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
        failure {
            echo '❌ Pipeline failed.'
        }
        success {
            echo '🎉 Pipeline finished successfully.'
        }
        always {
            echo '🧹 Cleaning up after pipeline...'
        }
    }
}

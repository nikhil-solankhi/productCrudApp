pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_CMD = 'docker-compose up --build'
        NPM_GLOBAL_PATH = "$HOME/.npm-global/bin"
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

        stage('Setup NPM') {
            steps {
                script {
                    sh 'mkdir -p $HOME/.npm-global'
                    sh 'npm config set prefix $HOME/.npm-global'
                    sh 'export PATH=$NPM_GLOBAL_PATH:$PATH'
                    sh 'npm install -g npm@9'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('redux_frontend') {
                    script {
                        sh 'npm cache clean --force'
                        sh 'rm -rf node_modules package-lock.json'
                        sh 'npm ci' // Install dependencies cleanly
                        sh 'npm run build' // Build React app
                        sh 'ls -lh build/' // Verify React build output
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


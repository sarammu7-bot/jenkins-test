pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/sarammu7-bot/jenkins-test.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                dir('colorful-footwear-site') {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Stop Old Containers') {
            steps {
                dir('colorful-footwear-site') {
                    sh 'docker-compose down || true'
                }
            }
        }

        stage('Start New Containers') {
            steps {
                dir('colorful-footwear-site') {
                    sh 'docker-compose up -d'
                }
<<<<<<< HEAD
            }
        }

        stage('Verify Running Containers') {
            steps {
                sh 'docker ps'
=======
>>>>>>> f8d4a9d (Add Docker deployment configuration)
            }
        }

        stage('Verify Running Containers') {
            steps {
                sh 'docker ps'
            }
        }
      
    }

 }

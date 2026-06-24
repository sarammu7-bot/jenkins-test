pipeline {
agent any

```
stages {

    stage('Clone Repository') {
        steps {
            git branch: 'main',
            url: 'https://github.com/sarammu7-bot/jenkins-test.git'
        }
    }

    stage('Install Backend Dependencies') {
        steps {
            dir('colorful-footwear-site/backend') {
                sh 'npm install'
            }
        }
    }

    stage('Start Backend') {
        steps {
            dir('colorful-footwear-site/backend') {
                sh '''
                pkill -f "node server.js" || true
                nohup node server.js > app.log 2>&1 &
                '''
            }
        }
    }

    stage('Deploy Frontend') {
        steps {
            sh '''
            sudo mkdir -p /var/www/html
            sudo cp -r colorful-footwear-site/frontend/* /var/www/html/
            '''
        }
    }
}
```

}

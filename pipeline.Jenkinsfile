pipeline {
    agent any

    stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

        stage('Build') {
            steps {
                // Run your build commands here
                sh '''
                    cd minor-1-project
                    npm install
                ''' // Example for a Node.js project
            }
        }

        stage('Test') {
            steps {
                // Run your tests here
                 sh '''
                    cd minor-1-project
                    npm test
                ''' // Example for a Node.js project
            }
        }

        // stage('Deploy') {
        //     steps {
        //         // Deploy your application
        //         sh './deploy.sh' // Example deployment script
        //     }
        // }
    }

    post {
        success {
            echo 'Pipeline succeeded!'

            // You can add additional post-success actions here
        }

        failure {
            echo 'Pipeline failed :('

            // You can add additional post-failure actions here
        }
    }
}

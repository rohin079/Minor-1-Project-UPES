pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the GitHub repository
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://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@github.com/rohin079/Minor-1-Project-UPES.git']]])
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
                sh 'npm test' // Example for a Node.js project
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
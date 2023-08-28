pipeline {
    agent any

    stages {

        stage('Cleanup Workspace') {
            steps {
                clean()
            }
        }
        stage('Build') {
            steps {
                // Run your build commands here
                bat '''
                    cd minor-1-project
                    npm install
                ''' // Example for a Node.js project
            }
        }

        // stage('Test') {
        //     steps {
        //         // Run your tests here
        //          bat '''
        //             cd minor-1-project
        //             npm test
        //         ''' // Example for a Node.js project
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         // Deploy your application
        //         bat './deploy.bat' // Example deployment script
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

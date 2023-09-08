pipeline {
    agent any

    environment {
        NODEJS_HOME = 'C:\Program_Files\nodejs\'
        NPM_HOME = 'C:\Users\aaksh\AppData\Roaming\npm'
        // MONGODB_URL = 'mongodb://localhost:27017/your-database-name'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your code repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat "${NODEJS_HOME}\\npm install"
            }
        }

        stage('Build and Test') {
            steps {
                bat "${NODEJS_HOME}\\npm run build"
                // Add any testing steps here
            }
        }

        stage('Deployment') {
            steps {
                // Stop your existing Node.js app if needed
                // bat "${NODEJS_HOME}\\npm stop"

                // // Deploy the latest code
                // bat "${NODEJS_HOME}\\npm start"

                // Optionally, you can also deploy your frontend (React) separately if needed
                // bat "cd frontend && ${NODEJS_HOME}\\npm install && ${NODEJS_HOME}\\npm run build"
                // bat "cd frontend && ${NODEJS_HOME}\\npm start"
            }
        }
    }
}

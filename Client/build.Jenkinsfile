pipeline {
    agent any


    stages {

        stage('Build React App'){
            steps{
                sh 'npm install'
                sh 'npm run build'
            }
        }



        stage('Build Docker Image') {
            steps{
                withCredentials([
                    usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable:'PASSWORD')
                ]) {
                    sh '''
                    docker login --username $USERNAME --password $PASSWORD
                    docker build -t uni-connect:latest .
                    docker tag uni-connect:latest shwetasng/uni-connect:latest
                    docker push shwetasng/uni-connect:latest
                    '''
                }
            }
        }
    }
}

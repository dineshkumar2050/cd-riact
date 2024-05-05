pipeline {
    agent any
    stages {
        stage('git') {
            steps {
                git branch: 'main', credentialsId: '8f791876-c68a-41ad-b163-9ed1dbe0ff6a', url: 'https://github.com/dineshkumar2050/cd-riact.git'
            }
        }
    }
    post {
        success {
            // Send notification if the pipeline succeeds
            echo 'Pipeline succeeded! Deployment completed.'
        }
        
        failure {
            // Send notification if the pipeline fails
            echo 'Pipeline failed! Deployment unsuccessful.'
        }
    }
}

// pipeline {
//     agent any
    
//     stages {
//         stage('Checkout') {
//             steps {
//                 // Checkout the code from the Git repository
//                 git 'https://github.com/dineshkumar2050/cd-riact.git'
//             }
//         }
        
//         stage('Install Dependencies') {
//             steps {
//                 // Install Node.js and npm
//                 sh 'curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -'
//                 sh 'sudo apt-get install -y nodejs'
                
//                 // Install project dependencies
//                 sh 'npm install'
//             }
//         }
        
//         stage('Run Tests') {
//             steps {
//                 // Run tests using npm
//                 sh 'npm run test'
//             }
//         }
        
//         stage('Build') {
//             steps {
//                 // Build the React application
//                 sh 'npm run build'
//             }
//         }
        
//         stage('Deploy') {
//             steps {
//                 // Deploy the application (example: copy build files to a server)
//                 // sh 'scp -r build/* user@server:/path/to/deployment/directory'
//                 sh 'aws s3 sync build/ s3://react-app-code-build-stprage'
//             }
//         }
//     }
    
//     post {
//         success {
//             // Send notification if the pipeline succeeds
//             echo 'Pipeline succeeded! Deployment completed.'
//         }
        
//         failure {
//             // Send notification if the pipeline fails
//             echo 'Pipeline failed! Deployment unsuccessful.'
//         }
//     }
// }

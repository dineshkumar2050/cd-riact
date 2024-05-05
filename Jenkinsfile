pipeline {
    agent any
    
    environment { 
        NVM_DIR = "$HOME/.nvm" 
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo "Checking out..."
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '8f791876-c68a-41ad-b163-9ed1dbe0ff6a', url: 'https://github.com/dineshkumar2050/cd-riact.git']])
                echo "Checked out successfully"
            }
        }
        stage('Install NVM and Node.js') {
            steps { 
                sh '''
                    /bin/bash -c "
                        export NVM_DIR="$HOME/.nvm" 
                        /bin/zsh -c '
                            [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
                            echo 'NVM installation placeholder.  Output of nvm --version below:'
                            nvm --version
                            nvm install --lts 
                            nvm use default 
                        ' 
                    "
                '''
            }            
        }
        
        stage('Install Dependencies') {
            steps {
                sh '''
                    /bin/bash -c "
                        export NVM_DIR="$HOME/.nvm" 
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
                        npm install
                    "
                '''
            }
        }
        
        stage('Run Tests') {
            steps {
                sh '''
                    /bin/bash -c "
                        export NVM_DIR="$HOME/.nvm" 
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
                        npm run test
                    "
                '''
            }
        }
        
        stage('Build') {
            steps {
                sh '''
                    /bin/bash -c "
                        export NVM_DIR="$HOME/.nvm" 
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
                        npm run build
                    "
                '''
            }
        }
        
        stage('Deploy') {
            steps {
                // ... (your deployment logic)
                sh ''' 
                    export PATH=/opt/homebrew/bin:$PATH 
                    aws s3 sync build/ s3://react-app-code-build-stprage
                ''' 
            }
        }

    }
    
    post {
        success {
            echo 'Pipeline succeeded! Deployment completed.'
        }
        failure {
            echo 'Pipeline failed! Deployment unsuccessful.'
        }
    }
}

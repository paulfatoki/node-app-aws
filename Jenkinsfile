pipeline{
    agent any
    stages{
         stage("GitHub checkout") {
            steps {
                script {
 
                    git branch: 'main', url: 'https://github.com/paulfatoki/node-app-aws' 
                }
            }
        }
        stage("Remove all old images"){
            steps{
                sh 'printenv'
                sh 'git version'
                sh 'docker ps'
                sh 'docker images'
                sh  'docker image prune'
            
            input(message: "Are you sure you want to continue?", ok: "yes ")
            }
        
        }
        stage("build docker images"){
            steps{
               
            sh 'docker images'
            sh 'docker build . -t paulfatoki/diamondimg'
           }
        }
        
        stage("push image to DockerHub"){
            steps{

               script {
                  
                 withCredentials([string(credentialsId: 'dockerID', variable: 'dockerID')]) {
                    sh 'docker login -u paulfatoki -p ${dockerID}'
            }
              sh 'docker push paulfatoki/diamondimg:latest'
            }
        }
    }
    }
}
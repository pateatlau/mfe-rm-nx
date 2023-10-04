#!groovy
pipeline {
  agent none

  environment {
    NX_BRANCH = "main"
    CHANGE_TARGET = "dev"
  }
  
  tools {nodejs "NodeJS"}

  stages {
    stage('Pipeline') {
      parallel {
        stage('Main') {
          agent any
          
          steps {
            echo "Running npm ci..."
            sh "npm ci"
            echo "npx nx affected -t lint --base=main~1 --head=main --parallel=3"
            sh "npx nx affected -t lint --base=main~1 --head=main --parallel=3"
            echo "npx nx affected -t test --base=main --head=HEAD --parallel=3"
            sh "npx nx affected -t test --base=main --head=HEAD --parallel=3"
            echo "npx nx affected -t build --base=main --head=HEAD --parallel=3"
            sh "npx nx affected -t build --base=main --head=HEAD --parallel=3"
          }
        }
      }
    }
  }
}

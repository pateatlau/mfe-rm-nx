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
            echo "npx nx format:check"
            sh "npx nx format:check"
            echo "npx nx affected --base=HEAD~1 -t lint --parallel=3"
            sh "npx nx affected --base=HEAD~1 -t lint --parallel=3"
            echo "npx nx affected --base=HEAD~1 -t test --parallel=3"
            sh "npx nx affected --base=HEAD~1 -t test --parallel=3"
            echo "npx nx affected --base=HEAD~1 -t build --parallel=3"
            sh "npx nx affected --base=HEAD~1 -t build --parallel=3"
          }
        }
      }
    }
  }
}

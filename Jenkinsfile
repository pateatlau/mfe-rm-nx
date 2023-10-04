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

            echo "git fetch..."
            sh "git fetch origin main:refs/remotes/origin/main"
            echo "npx nx affected lints..."
            sh "npx nx affected  --target=lint  --base=HEAD~1"
            echo "npx nx affected tests..."
            sh "npx nx affected  --target=test  --base=HEAD~1"
            echo "npx nx affected builds..."
            sh "npx nx affected  --target=build  --base=HEAD~1"
          }
        }
      }
    }
  }
}

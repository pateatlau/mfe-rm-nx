#!groovy
pipeline {
  agent none

  environment {
    NX_BRANCH = "main"
    CHANGE_TARGET = "dev"
  }
  
  stages {
    stage('Pipeline') {
      parallel {
        stage('Main') {
          when {
            branch 'main'
          }

          agent any
          
          steps {
            sh "npm ci"
            sh "npx nx format:check"
            sh "npx nx affected --base=HEAD~1 -t lint --parallel=3"
            sh "npx nx affected --base=HEAD~1 -t test --parallel=3"
            sh "npx nx affected --base=HEAD~1 -t build --parallel=3"
          }
        }

        stage('PR') {
          when {
            not { branch 'main' }
          }

          agent any
          
          steps {
            sh "npm ci"
            sh "npx nx format:check"
            sh "npx nx affected --base origin/${env.CHANGE_TARGET} -t lint --parallel=3"
            sh "npx nx affected --base origin/${env.CHANGE_TARGET} -t test --parallel=3 --configuration=ci"
            sh "npx nx affected --base origin/${env.CHANGE_TARGET} -t build --parallel=3"
          }
        }
      }
    }
  }
}

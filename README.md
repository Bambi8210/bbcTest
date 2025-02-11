# Sports Standing Endpoints

## Introduction

This Cypress framework provides a set of custom scripts for testing the API end points related to the Rugby Union competition’s standings

# Getting Started

## Prerequisites

### Install Node.js

1. Ensure npdejs is installed - this can be downloaded from: https://nodejs.org/en/download/
2. Download the installer appropriate for you system
3. Follow the on-screen instructions to complete the installation.

## Setup Projct Environment

1. Clone or Download the Project
   - Access the prjoect at the page https://github.com/Bambi8210/bbcTest.git
   - or Download and Extract the contents of bbcProject.zip
2. Create a new folder for the project, suggest `C:\Users\<user>\TechTest

## Project Configuration

1. Using your preferred code editor, eg. VSC, navigate to the BBC Project
2. From the `Terminanl` in VSC run: 
    `npm install cypress --save-dev` this installs cypress to the project directory as a dev dependancy
2. Explore the Project - test specs should now be visible under the `e2e` folder

# Test Execution

## Running the tests

1. From the `Terminal` in VSC, Run `npx cypress open` this will launch Cypress
2. Cypress should have launched and you have 2 options `E2E Testing` or `Component Testing`, select `E2E Testing` 
3. Select your preferred browser to start tests, eg `Start E2E Testing in Chrome`
4. Once cypress is running you should be able to execute the tests under `Specs' tab`
5. Select scenarions 1 through to 5 separetly to execute each test

# Additional Information

1. `Run All` feature is currently disabled so each scenario spec will need to be run individually.
2. `Gherkin_BBC.txt` includes the manual test plan
3. Currently `scenario5_simple` is failing on the assertion section

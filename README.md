# Sisense Compose SDK Demo
Simple React web app for demoing and exploring Compose SDK capabilities. Flask back end enables communication between your front end, sisense environment, and db.

## Why should I use this
- Ease of use
  - Simply typing 'docker-compose up' creates a sandbox website running where you can explore or demo compose sdk
- Examples 
  - This comes packaged with a Csdk example for reference 
- Repeatability 
  - Create multiple versions, espeically useful for sisense embed projects specifically tailored for a conference / customer / prospect

## What do I need to start
- The requirements to run this application are:
  1. Docker Desktop
  2. Visual Studio Code
  3. Sisense Environment Access

## Before you begin
1. Download [Docker Desktop](https://www.docker.com/products/docker-desktop/) and [VS Code](https://code.visualstudio.com/download)

2. Enable API tokens in sisense environment
  - Admin Tab -> App Configuration -> Feature Management -> User Profile -> API Token (toggle on)

3. Gather the following information
  - Sisense url
  - Your API token
    - User Profile (upper right corner) -> My Profile -> API Token

4. Extensions
  - How to download extensions
    - Navigate to Extensions in the left side bar
      - Windows hotkey: Ctrl + Shift + X
      - Mac hotkey: Cmd + Shift + X
    - Search the extension name & click install
  - Recommended extensions
    - Docker
    - Dev Containers
    - Auto Rename Tag
    - Name: ES7+ React/Redux/React-Native snippets
    - Live Server

## Getting Started
1. Open this folder in VSCode
  - Windows hotkeys
    - New vscode window: Ctrl + Shift + N
    - Vscode Open folder: Ctrl + K then Ctrl + O
  - Mac hotkeys
    - New vscode window: Cmd + Shift + N
    - Vscode Open Folder: Cmd + O
  - Select 'csdk_demo' folder and open

2. Setup .env file
  - Rename 'env.txt' to '.env'
  - Update .env values with the information gathered in the previous step
    - Set REACT_APP_SISENSE_URL to your sisense url
    - Set REACT_APP_SISENSE_API_TOKEN to your sisense api token
  - Save .env

3. Build the docker-compose
  - Ensure Docker is running in the background
    - If it isn't running, open Docker Desktop
  - From CLI
    - Toggle vscode terminal
      - Windows hotkey: Ctrl + `
      - Mac hotkey: Control + `
    - Type 'docker-compose up'
  - OR From File Explorer
    - Right click 'docker-compose.yml'
    - Select 'Compose Up'
  - IF docker fails to build with an error 'unable to get local issuer certificate' (seen on windows)
    - Delete ./services/frontend/Dockerfile
    - Rename ./services/frontend/Dockerfile.windowsErr to ./services/frontend/Dockerfile
    - Retry 'docker-compose up' 

4. Upload Sample ECommerce.smodel to Sisense environment & build
  - This version of Sample ECommerce includes the DateCurrent field which enables relative date filtering

## Embed SDK
This application can also show Embed SDK. To do this simply add a dashboard id to /src/components/views/embedsdk/EmbedSdk.jsx

## Demoing
  1. Open http://localhost:3000/ in your browser to navigate to the webpage
  2. Open React container
    - Navigate to Docker tab on the left sidebar
    - Under Containers section, right click 'csdk_demo-frontend'
    - Select 'Attach Visual Studio Code'
    - This new window will have correct error / warning detection and intellisense for react development
  3. The /src folder contains all of the react code you will work with

## About this application

Here is a high level overview of the folders and files in this application. 
./.env
  - Definition of environment variables used by each container

./docker-compose.yml
  - Instructs 'docker-compose up' command to create frontend, backend, and db containers

./services
  - Contains a folder per container

  ./services/frontend
    - React application

  ./services/backend
    - Flask APIs that can talk to frontend, db, and sisense environment apis
    - Ignore unless you need custom functionality

  ./services/db
    - Postgres db
    - Ignore unless you need a db

./data
  - Ignore - this is where the postgres data lives

./.gitignore
  - Ignore - this tells git which files should be excluded from repo

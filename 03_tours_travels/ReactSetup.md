# Setup React Project

- install node js new LTS version from (https://nodejs.org/dist/v22.13.0/node-v22.13.0-x64.msi)
- do not tick the checkbox (or do not install chocolaty)
- restart vs code after installing node
- check node version using ``node -v``
- check npm version using ``npm -v``
- npm -> node package manager

## create react project with create-react-app(cra)

- install create-react-app globally using ``npm i -g create-react-app``
- i means install
- -g means globally
- check create-react-app version :``create-react-app -V ``
- if there is asn error like running script disabled then type this command in terminal ``Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned``
- to create a new React Project :  `` create-react-app helloreact``
- change folder to helloreact :  ``cd helloreact``
- open project folder in VS code :``code .``
- Start the project :``npm start``
- now check browser or type ``http://localhost:3000`` in urlbar in chrome

## VITE Setup

1. open cmd and Type `npm create vite@latest`
2. input  y in terminal if asked to install
3. then type project name and default package
4. choose React using down arrow key
5. choose Javascript using enter key
6. then after project is created open it in new vs code window
7. then open terminal and type `npm install`
8. after installing type `npm run dev` in terminal
9. ctrl + click on the url and it will be opened in browser

# Boilerplate for app && Dapp
### Synapsis
Full speed Ahead for internet 3.0 and Blockchain Interopability.
> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The Dapp-Boilerplate boilerplate integrates uPort and Firebase. In other words cloud resources, application permissions and other identity related features can be administrered from the uPort Self-Sovereign Identity Systems and deployed within Google's Firebase (Infrastructure as a Service).

```
git clone https://github.com/efichot/Dapp-Boilerplate

yarn

yarn start // development
yarn build // production

yarn build:wasm // compile C or C++ into WebAssembly
yarn build:asm // compile C or C++ into asm.js

```
*logo*
![logo](assets/logo-firebase.png)
![logo](assets/uPort_icon.png)
![logo](assets/react_redux-saga.png)
![logo](assets/truffle_logo.png)
![logo](assets/WebAssembly_logo.png)

**Distributed Autonomous Management System**
The Boilerplate aims to solve the challenge of starting a dapp or a app where you need to manage, organize and facilitate a large distributed network of people.

**This project will grow over time**
As of right now, the primary objective is to refine the user interface

## How it's Built
The Frontend is primary built in React, Redux and Redux Saga.
The Backend is built primary with Firebase.

1. Atomic Design Philosophy
2. Component/Container Separation
3. Functional State Management

The /functions forder is the folder who contains all the firebase functions so you can write modern javascript for serveless architecture.
You will need to deploy the functions first if you want modify the way firebase add new user (authentication) and require only the UID (Unique Identifier) of uport app.
See how to deploy cloud function on firebase website, (with the firebase CLI) you will need to change the /functions/index.js with your firebase private key in order to change the authentication. Again see the firebase docs for the firebase admin SDK and his private key for modifying your authentication server to produce custom signed tokens when a user succesfully signs in. Your app receives this token and uses it to authenticate with firebase.

> By the way uport is available for Android and IOS.

> You have also a /contracts  folder for keeping your solidity smart contracts, and a truffle.js for communicate with testrpc, ganache or whatever. You can use ```truffle develop``` in the console right now, see the truffle doc.

## How It Works
1. Login With uPort
2. Attest Firebase UID
3. Request Application Permissions

## Tools
**WebAssembly**
The WebAssembly NPM Package (https://www.npmjs.com/package/webassembly) is a minimal toolkit for WebAssembly.
It's used by the script build:wasm to build .c or .cpp into .wasm in the same folder.
You can use this .wasm file with the wasm-loader for webpack, see how it's work (https://github.com/ballercat/wasm-loader)

```
    npm install -g webassembly
```
ps: You can use this Website: for testing and compiling fast c into wasm (https://mbebenita.github.io/WasmExplorer/) for not being cumbersome.
**Emscripten**
Emscripten is use to compile .c or .cpp in .asm a javascript readable format but way slower than .asm.js
For installation see this:
https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html
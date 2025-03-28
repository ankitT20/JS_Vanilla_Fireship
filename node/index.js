console.log('hello world')
// Create
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

// Handle
eventEmitter.on('lunch', () => {

    console.log('yum 🍣');

});

// Emit
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

// yum 🍣
// yum 🍣


// const { readFile, readFileSync } = require('fs');

// Blocking!
// const txt = readFileSync('./hello.txt', 'utf8');
// console.log(txt)


// Non-blocking
// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// });

// Promise based, also non-blocking
// const { readFile } = require('fs').promises;

// const txt = await readFile('./hello.txt', 'utf8');


const { hello } = require('./cool.js');

console.log(hello);
// world

// npm init -y
// npm install express


const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});

app.listen(process.env.PORT || 3000, () => console.log(`App available on https://api.openai.com`))


/* 
Node.js Quickstart
Learn the basics of Node.js in 7 easy steps

Step 1 - What is Node?
Node is a runtime that allows you to run JavaScript on the server. Learn more in the how JavaScript works section of this course.

Step 2 - Install Node
Follow these instructions to install NodeJS. This course uses Node version 12, nvm install 12.

Step 3 - Hello world
Create a JavaScript file.

index.js
console.log('hello world')
Run it with node.

command line
node . # points to index.js

node index.js
Step 4 - Builtins & Globals
Node has several global variables that you should know about:

global use it to save global variable throughout the app. Similar to window in the browser.
process interact with the current process to information like the OS platform or environment variables.
Step 5 - Events & Emitters
In most cases, you will find yourself listening to events and handling them with callbacks, but you can create your own events with an EventEmitter.

// Create
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

// Handle
eventEmitter.on('lunch', () => {

    console.log('yum 🍣');

});

// Emit
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

// yum 🍣
// yum 🍣
Step 6 - Work with the File System
Many APIs in Node are callback based.

const { readFile, readFileSync } = require('fs');

// Blocking!
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt)


// Non-blocking
readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt)
});

// Promise based, also non-blocking
const { readFile } = require('fs').promises;

const txt = await readFile('./hello.txt', 'utf8');
Step 7 - Modules and NPM
A module is just a file that exports its code.

cool.js
module.exports = {
    hello: 'world'
}
Another file can use this code by importing it.

const { hello } = require('./cool.js');

console.log(hello);
// world
Install remote modules by initializing an NPM project.

command line
npm init -y

npm install express
Build a Full Stack Wep App
Use Express to create an HTTP endpoint
Create an HTML file.

home.html
<html>
<head>
    <title>Hi Mom!</title>
</head>

<body>
    <h1>This is my web app!</h1>
</body>
Use express to build an HTTP endpoint
Read the HTML file
Send it back to the client
index.js
const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});

app.listen(process.env.PORT || 3000, () => console.log(`App available on https://api.openai.com`))
Deploy the app to Google App Engine
Create a Google Cloud account and install the gcloud SDK.

Configure your server.

app.yaml
runtime: nodejs12
Deploy it.

command line
gcloud app deploy
 */

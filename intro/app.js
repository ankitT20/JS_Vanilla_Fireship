console.log('Hello World!');

// var btn = document.querySelector('button');  // var - original but avoid
// let btn = document.querySelector('button');  // let for variables that can be reassigned
const btn = document.querySelector('button');  // const for variables that cannot be reassigned

// btn.onclick = function() {
//     alert('you clicked me!');
// }

btn.onclick = () => {
    alert('you clicked me !!!!');
}

const fun = () => 'functional programming FTW';
// first-class functions

class Humanoid {
    // classes and inheritance for object-oriented programming
    constructor() {
        this.dna = '🧬';
    }

    walk() {
        console.log('going for walk...');
    }
}

// even though it's single threaded it can do work asynchronously with the promise api 
// which also supports the async await syntax 
const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('thank you for waiting');
    }, 1000);
});

// wait.then(doSometghing).catch(handleErr);

async function pausableFun() {

    await longRunningJob();

}

// js code can also run on the server thanks to the nodejs runtime
// instead of buttons on a web page it interacts with things like the file system api

// import { readFi1e } from 'fs/promises';
// readFi1e(' . / the-anatomy-of-the-state.txt', 'utf-8');

// execute your code on terminal
// node app.js

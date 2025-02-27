/* 📦 Modules
Learn how to import and export JS code as a module or package.
A module is just a file that exports some JavaScript code.
 
First, a file exports (package) something useful…
awesome-pacakge.js
export default '🧁';
 */
// Second, a different file uses this code by importing it.
// my-app.js
import cupcake from '../intro/awesome-pacakge.js';
console.log(cupcake);

// Pretty simple! But there more you should know.


// Default Exports
// A module can specify at most 1 default export.
export default '🧁';
// This allows the consumer to name the module whatever it prefers when importing.
// wait, that's not pizza...
import pizza from '../intro/awesome-pacakge.js';
console.log(pizza);
// This is ideal for modules that export a single class or function.


// Named Exports
// Some modules might offer a collection of independent helper functions, like RxJS or Lodash. A better option for such packages is named exports.
// export const cupcake = '🧁';
// export const pizza = '🍕';
// If the consumer only wants pizza, they can import it by name - this is called treeshaking or dead code elimination.
// import { pizza } from '../intro/awesome-package.js'; 


// How to change the name of an import?
// If you don’t like the exported name, you can change it with the as keyword.
import { pizza as awesomePizza } from '../intro/awesome-pacakge.js'; 

console.log(awesomePizza);


// How to export a list of variables?
// A module may have many variables to export and this can get messy. Use an export list to make your code more succinct and organized.
const cupcake1 = '🧁';
const pizza2 = '🍕';

export { 
    cupcake1,
    pizza2
}
// Additional Resources
// Samantha Ming’s Module Cheatsheet[https://www.samanthaming.com/tidbits/79-module-cheatsheet/]

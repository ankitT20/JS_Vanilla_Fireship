// To run Quokka.js
// Ctrl + K + Q
// 2. PRIMATIVES & OBJECTS
console.log(typeof undefined);
console.log(typeof 23);
console.log(typeof "23");
console.log(typeof false);
console.log(typeof true);
console.log(null == undefined);
console.log(null === undefined);
var x;
console.log(x);
function xy() {}
console.log(xy());
var x = null;
console.log(x);
function xyz() {
    return null;
}
console.log(xyz());

console.log(typeof {});
console.log(typeof function(){});
// If it is not a primitive, it is an object
var x = {};  // DEFINE
x['foo'] = 'bar';  // MUTATE
console.log(x);

var foo = Boolean(false);  // primitive wrapper object - DON'T DO THIS
console.log(foo);

var foo = String('hello');
console.log(foo);
var bar = 'hello';  // DO THIS
console.log(bar);


// 3. CONTROL FLOW TRUTHY FALSY
var truthy;

if (truthy) {
    // do this
} 
else if (truthy == null) {
    // do that
}
else {
    // do that
}
console.log(true)
console.log(!! {})
console.log(!! [])
// anything that is an object is truthy
console.log(!! '');
console.log(!! 'hi');

console.log(!! 0);
console.log(!! -1);
// ! is a logical NOT operator, ! will return false, if a value can be converted to true, 
// so !! will give you actual boolean value
var x = !true;
console.log(x)
var x = !!true;
console.log(x)

var x = true && false;
console.log(x)
var x = true || false;
console.log(x)

var x = "23" == 23;
// == is an abstract comparison, it will try to make type conversion , before running
console.log(x)
var x = "23" === 23;
console.log(x)

// TERNARY operator
var x;
if (truthy) {
    x = 1
} else {
    x = 2;
}

var x = truthy ? 1 : 2;

// SWITCH
var expression = 'dog';
switch (expression) {
    case 'dog':
        console.log('🐕');
        break;

    case 'cat':
        console.log('🐈');        
        break;
}

// TRY/CATCH
try {
    // throw new Error();
    console.log('works');    
} catch (error) {
    console.log('broke');
} finally {
    console.log('always works');
}

// 4. VARIABLES
x = '😎';

var x = 'something';
x = 'something else';

var g = 'global';
function app() {
    // var l = 'local';
    l = 'local';  // undeclared variable
    console.log(g);
}
// console.log(l);  // l is not defined
app();

// HOISTING
console.log(x);
var x  // will be considered , on top of code

var x = 'a';

function app() {
    if (true) {
        var x = 'b';
    }

    var x = 'c';
}

if (true) {
    // block
    let xm = 23;  // let is block scoped, limeted to that block, doesn't leak to parent scope (global)

    const x = 23;
    // x = 24;  // can't reassign . Assignment to constant variable.
    console.log(xm);
    console.log(x);
    
}
// console.log(xm); // xm is not defined


// 5. FUNCTIONS
function hello(input) {
    const output = 'hello ' + input + '😍';
    return output;
}
console.log(hello('hi jeff'));

// const hello = (input) => output

// anonymous and named
function someName() {
    
}

const someNamee = function() {
    
}

// higher order functions
function cool(fun) {
    fun();
}
cool(() => console.log('sweet!'));

// function outer() {
//     function inner() {
        
//     }
// }

// closures
function outer() {

    const fish = '🐟';
    let count = 0;

    function inner() {
        count++;
        return `${count} ${fish}`
    }

    return inner;
}

const fun = outer();
console.log(fun());
console.log(fun());
console.log(fun());

// 6. OBJECTS
// key: value pairs
const obj = {
    name: 'Clown',
    face: '🤡',
    age: 99,
    hello: function() {
        console.log(`hello ${this.name}`);  
        // this is the current object that the code is operating in
        // this refers to the object that is calling the function
        console.log(this);
    },
    hello2: () => {
        console.log(this);
        // it dosent have its own binding to this, bypasses our custom function, this becomes the global object
    }
}

obj.hello();
obj.hello2();

// other methods
const clown = { 
    face: '🤡', 
}

const ghost = { 
    face: '👻'
}

function hello() { 
    return this.face; 
}

const result = hello.call(ghost); 
console.log(result)



/* 
typeof  23; // number
typeof "foo" // string
typeof null // null

typeof {} // object
typeof [] // object
typeof function() {} // function (which inherits from object)





true; // true
!! "hello"; // true
!! -1; // true
!! []; // true
!! {}; // true

false; // false
!! null; // false
!! undefined; // false
!! 0; // false
!! ""; // false




// hoisting is as if your `function fun() {}` was located here. 

fun(); // works. 

function fun() {}



// closure.js

function outer() {

    let count = 0; // persists in memory after outer is popped off the call stack

    function inner() {
        count++;
        return count;
    }

    return inner;
}

// Creates the Closure
const addOne = outer();

// Operates within its context or lexical environment
addOne(); // 1
addOne(); // 2
addOne(); // 3

*/


/* 
🧟 The JavaScript Survival Guide
A quick primer for advanced JavaScript concepts like primitives, hoisting, closures, and this binding.

The JavaScript Survival Guide is a primer for the so-called “weird” features of the language. These concepts are common pain-points for developers, but they become relatively simple when you understand relationship between your code and the JS engine. Not to mention, these topics come up frequently on JS interviews.

All research this section is based on the guidance from Mozilla - the holy grail of JS documentation.

Primitive vs Object
The lowest level building blocks in JavaScript are primitives, which include: undefined, null, string, number, bigint, boolean, and symbol. All primitives are immutable.

Anything that is not a primitive is an Object, or a descendant of it. Objects are collections of key/value pairs and used as the building block for more complex data structures. Here are a few examples:

index.js
typeof  23; // number
typeof "foo" // string
typeof null // null

typeof {} // object
typeof [] // object
typeof function() {} // function (which inherits from object)
Truthy vs Falsy
When a value is encounted in a Boolean context - such as an if statement - it will be coerced into a boolean. If the result is true then the value is truthy and vice versa. If you’re unsure about a value, you can convert it using the logical ! NOT operator twice, or a double-bang as I like to call it !!.

index.js
true; // true
!! "hello"; // true
!! -1; // true
!! []; // true
!! {}; // true

false; // false
!! null; // false
!! undefined; // false
!! 0; // false
!! ""; // false
Hoisting
Hoisting means that your declarations, i.e. functions and variables, will always be placed in memory at the top of the execution context.

Notice how the function below can be called before it’s actually declared. That’s hoisting in action.

index.js

// hoisting is as if your `function fun() {}` was located here. 

fun(); // works. 

function fun() {}
Closures
What is a Closure? Here’s a quick and simple definition that makes sense to me (although “lexical environment” would be a more accurate than function):

A function within a function, where the outer function’s local variables remain available in memory after creation.

If you come from a classical OOP background, you may notice how closure is very similar to a class instance with properties and methods.

Notice how outer contains a local number variable, while inner increments it. Even though outer is only called once, we can still access the count because JS “closes over” the inner function to preserve the execution context.

closure.js
function outer() {

    let count = 0; // persists in memory after outer is popped off the call stack

    function inner() {
        count++;
        return count;
    }

    return inner;
}

// Creates the Closure
const addOne = outer();

// Operates within its context or lexical environment
addOne(); // 1
addOne(); // 2
addOne(); // 3

 */

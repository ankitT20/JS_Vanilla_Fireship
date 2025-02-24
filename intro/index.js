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
        return '${count} ${fish}'
    }

    return inner;
}

const fun = outer();
console.log(fun());
console.log(fun());
console.log(fun());
console.log(fun());

// 10:53








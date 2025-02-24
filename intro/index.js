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
console.log(x)

// 5:22

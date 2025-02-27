/* Objects
Everything you need to know about the JavaScript Object
The JavaScript object is a collection of key-value pairs, similar to a map, dictionary, or hash-table in other programming languages. Anything that is not a JS primitive is an Object.
    An Object is a collection of properties.
    A Property is a key-value pair that contains a name and a value.
    A Property Name is a unique value that can be coerced to a string that points to a value.
    A Property Value can be any value, including other objects or functions, that associated with the name/key.
    An object is a collection of properties, aka key-value pairs
 */
let obj = {};
let object = {};
let set;

// Object Basics
// Creation- Create an empty object. You have several options.
// literal
const dog = { }

// constructor
const cat = new Object();

// static method
const horse = Object.create({ })  // to inherit properties from another object, prototype chain


// Get and Set Properties
// Now that we have an empty object, we need to add properties to it using accessors.
// Valid property names include anything that can be coerced to a string, but must not used reserved words like function, var, return and so on.
get = object.property;
object.property = set;

// A potential gotcha with dot notation is that you can only access names that follow variable name identifier conventions, i.e without spaces or that do not start with a digit.
obj['hi mom'] = 1;
obj[23] = 1;

// syntax errors
// obj.hi mom
// obj.23

// Since ES6, we have a convenient shorthand for setting properties:
let hello;
let world;

// Old way 💩
const obj1 = {
    hello: hello,
    world: world
}

// Modern way 👍
const obj2 = {
    hello,
    world,
}

// Use a variable or expression as a property name by wrapping it in brackets - this is called a computed property.
const x = 'howdy';

const obj3 = {
  [x]: 23
}

obj.howdy // 23

// Object properties can be removed with the delete keyword.
delete obj.hello;
delete obj.world;


// References
// An object is stored in the heap memory, which means variables maintain a reference to it, as opposed to a full copy of it. When checking for object equality, it checks the reference - not the actual value of properties.
const original = { }

const x1 = original;
const y = original;

x === y; // true
// x === {}; // false, This condition will always return 'false' since JavaScript compares objects by reference, not value.ts(2839)

// Any variable that points to that reference can set its properties and they will be shared between all variables.
x.hello = 'world';

original.hello; // world
y.hello; // world


// Combine Objects
// But what if we want to clone an object to create a separate reference? Object.assign allows us to copy an object’s properties and create a new reference. Its properties will be copied to the new object, thus changes to the original object will not affect the clone.
const original1 = {
    hello: 'world'
 }

const clone = Object.assign({ }, original);

clone === original; // false

original.hello = 'changed!';

clone.hello; // world (did not change)


// Spread Syntax
// A more concise alternative to Object.assign is the spread syntax.
const clone1 = Object.assign({ }, original);

const sugar1 = { ...original };

const sugar = { ...original, hola: 'mundo' }; 


// Object Methods
// When a function is assigned to an object, it is called a method.


// Shorthand
const obj4 = {
  hello() {
	  console.log('yo')
  }
}

obj4.hello();


// This
// In a normal method, this refers to the object on which it is defined.

const obj5 = {
  username: 'Jeff',
  hello() {
	console.log(`My name is ${this.username}`)
  }
}

obj5.hello(); // My name is Jeff


// Arrow
// Functions using the arrow syntax are not bound to this, so it refers to the outer or global this context.
const obj6 = {
  username: 'Jeff',
  hello: () => console.log(this.username)
}

obj6.hello(); // My name is undefined


// Chaining
// In certain JS libraries you will see method chaining with obj.doThis().toThat(), which is made possible by simply returning the value of this from each method.
const game = {
  hitpoints: 100,
  log() {
    console.log(`👾 ${this.hitpoints}`);
  },
  takeDamage() {
    this.hitpoints -= 10;
    this.log();
    return this; // Required for chaining
  },
  heal() {
    this.hitpoints += 10;
    this.log();
    return this; // Required for chaining
  },
}

game.takeDamage().takeDamage().takeDamage().heal();

// 👾 90
// 👾 80
// 👾 70
// 👾 80


// Constructors
// Constructors are just functions that describe how to create an Object.
function Boat(name) {
  this.name = name;
  this.created = Date.now()

  this.horn = function () {
    console.log(this.name)
  }
}

// The object is then instantiated with the new keyword.
const sally = new Boat('Sally');
const molly = new Boat('Molly');

sally.horn() // Sally


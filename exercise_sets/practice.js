//1
// let fooA = { bar: 1 };
// fooA.sum = (num) => num + 2;
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);
// console.log(
//   [1,2,3].map(el => fooC.sum(el))
// ); //=> [ 3, 4, 5 ]

/*
fooA = {
  sum(num) {
    return num + 2;
  },
}

fooB = {}
fooC = {}

On line 1, a variable fooA is declared in the global scope and initialized to a reference,
which points to the object literal {bar: 1}. Then on line 2 a method `sum` is added to 
fooA using the member access notation. On lines 3 and 4 two objects are created using 
the method Object.create(). 

Object.create returns an object whos prototype is an existing object that is passed
as argument to the method. This means that the returned object's private [[Prototype]] property
will reference the object passed as argument, and the returned object will inherit any properties
defined on fooA

On line 3, fooB will be initalized to a reference, which points to an empty object whos private
[[Prototype]] property will reference fooA. The same will happen to fooC. fooB and fooC will not have
any properties of their own but instead will inherit from fooA. 

On lines 5 - 7, we're able to use fooC to call the method `sum`, because fooC will use its prototype
(fooA) to delegate access to that method. An array [3, 4, 5] is output to the console and `console.log`
returns undefined.
*/


//2
// let map = {
//   one: true,
//   two: true,
//   hasOwnProperty: true
// };

// console.log(map.hasOwnProperty("one")); 

// //Answer:
// console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// // → true

/*
The code on line 47 will throw a TypeError. The object map overrides the
hasOwnProperty method defined in Object.prototype, but as it's written hasOwnProperty
in `map` cannot be invoked as a method.

Because `map`'s prototype is Object.prototype, `map` has access to properties and methods
that are defined in Object.prototype. However the way that JavaScript's prototypal chain works
is that it first looks in the object used to call the method or property to see if it exists
in that object before checking the object referenced by its private [[Prototype]] property.

In this code snippet, `map` defines is own property `hasOwnProperty`, which overrides the `hasOwnProperty`
method defined in Object.prototype. As it is written however we cannot invoke it as a method.

On line 50, we use the object referenced by Object.prototype to invoke its own `hasOwnProperty` method
then we use the Function method call to explicitly set the context to `map` and then pass in the
property we want to check for `'one'`. This logs true and console.log returns undefined.
*/


//3
// let person = {
//   name: 'Jane',
//   printName() {
//     console.log(`My name is ${this.name}.`);
//   }
// };

// const logName = person.printName;
// logName();

/*
This is an example of how context can be lost when an object's method is copied into a
function.

The object person defines a method called printName. On line 80 the printName method is accessed
through the person object and assigned to a global variable `logName`. It's important to note that
we can do this in JavaScript because functions are first class values that can be passed around a program
.Copying the method out of an object in this manner strips the method's execution context. 
However, function execution context is entirely dependent on how we invoke the function. Therefore 
because the context was stripped and the `logName` variable, which now stores the `printName` 
method, is invoked as a standalone function, it's execution context will be the global object in node.

The function `logName` has no return value, but it outputs to the console `My name is undefined`. 
The reason is logs `undefined` is because the execution context of `logName` is the global object, in
other words, the value of `this` is the global object. JavaScript searches the global object for a 
property called `name` but cannot, and returns the value of `undefined`.
*/


//4
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function() {
//   console.log(`${this.name} says: Woof! Woof!`);
// };

// let fido = new Dog('Fido');
// fido.bark(); // 'Fido says: Woof! Woof!!'
// console.log(fido instanceof Dog); // true
// //What if we remove `new`? How to make it work without `new`?

/*
This is an example of the constructor/prototype object creation pattern. It's also an
example of pseudo classical inheritance.

Lines 103 - 105 define a constructor function called `Dog` that will add a new property
on each instance of `Dog` called `name`. Lines 107-109 define a method called `bark` on
the object referenced by `Dog.prototype`. Because all instances of `Dog` will inherit from 
`Dog.prototype`, all instances will be able to use `Dog` to delegate access to the method `bark`.

On line 111 the global variable `fido` is initialized to a new instance of the `Dog` class. A function
when invoked using the `new` keyword first creates an empty object, then it adds a private `[[Prototype]]`
property to the object that points to `Dog.prototype`. Then it binds the new object as the execution context
for the `Dog` constructor. This means that `this` on line 104 will refer to our new object. This `new` returns
the object referenced by `this` if the constructor doesn't explicitly return an object.

This is why `fido instanceof Dog` returns true.

If we wanted to remove the `new` keyword to create a scope safe constructor function we could do this
*/

// function Dog(name) {
//   if (this instanceof Dog) {
//     this.name = name; 
//   } else {
//     return new Dog(name);
//   }
// }






//5
class Animal {
  constructor() {}

  walk() {
    console.log("walking...");
  }
}

let dog = new Animal.prototype.constructor(); // equivalent to `new Animal()`
dog.walk(); // walking...
Object.getPrototypeOf(dog); // {constructor: ƒ, walk: ƒ}
Object.getPrototypeOf(dog) === Animal.prototype; // true
Animal.prototype.hasOwnProperty('constructor'); // true
typeof Animal.prototype.constructor; // "function"

/*
On line 158 a variable `dog` is declared in the global scope. The expression new Animal.prototype.constructor

*/

/*

//6
let obj = { a: "a" };
let childObj = Object.create(obj);

Object.setPrototypeOf(obj, childObj); // TypeError: Cyclic __proto__ value

//7
let dog = {
  name: "Luna",
  age: 5,

  introduce: () => {
    console.log(`I'm ${this.name} and I'm ${this.age} years old.`)
  }
}

dog.introduce();

//8
let dog = {
  name: "Luna",
  age: 5,
  toys: ["ball", "disk", "rope"],

  play() {
    this.toys.forEach(toy => {
      console.log(`${this.name} is playing with the ${toy}!`);
    });
  }
};

let cat = {
  name: "Nami",
  age: 2,
  toys: ["ball of yarn", "mouse"],

  play: dog.play
};

global.name = "Kiki";
global.toys = ["doll", "ball"];
let playMethod = dog.play;

playMethod();
dog.play();
cat.play();

//9
function isNaN(value) {
  return Number.isNaN(value);
}

console.log(isNaN("string")); // false
console.log(global.isNaN("string")); // true

//10
let pete = {
  name: "Pete",
  printName: function() {
  console.log(this.name);
  }
};

let john = { name: "John" };

let printName = pete.printName.bind(john);

pete.printName();
printName();
printName.call(pete); 

let printPetesName = printName.bind(pete);
printPetesName();

//11
name = "global";

let pete = {
  name: "Pete",
  getName: function() {
  return this.name;
  }
};

let john = { 
  name: "John",
  lastName: "Doe",
  printFullName: function() {
    let getFirstName = pete.getName.bind(null);
    console.log(getFirstName() + " " + this.lastName);
  }
};

john.printFullName();

//12
function add(num1, num2) {
  return num1 + num2;
}

let sum = new add(2, 3);
console.log(sum);

//13
//Refactor the `Musician` constructor to accept an object argument that contains all of
//the necessary properties
function Musician(firstName, lastName, age, spouse, children, genre, biggestHit) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.spouse = spouse;
    this.genre = genre;
    this.biggestHit = biggestHit;
}

Musician.prototype.introduce = function() {
  console.log(`${this.firstName} ${this.lastName} is a ${this.genre} musician, most known for their single "${this.biggestHit}".`);
}

let eminem = new Musician("Marshall", "Mathers", 48, null, ["Hailie", "Alaina", "Whitney"], "rap", "Lose yourself");
eminem.introduce();

let eminem = new Musician(eminemArgs); // you should be able to instantiate it like this
eminem.introduce();

//14
let rectangle = {
  width: 2,
  height: 3,
  methods: {
    area: function() {
      return this.width * this.height;
    },
    perimeter: function() {
      return 2 * (this.width + this.height);
    },
  }
};

rectangle.methods.area(); // ?

//15
let context = {
  func() {
    return this;
  }
};

let test = context.func;
console.log(test());

//16
function createDog(classDef, name, age, breed) {
  return new classDef(name, age, breed);
}

class Dog {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  bark() {
    console.log("Woof!");
  }
}

let felix = createDog(Dog, "Felix", 7, "Maltese");
felix.bark(); //=> logs 'Woof!'

*/

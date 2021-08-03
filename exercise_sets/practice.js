//1
let fooA = { bar: 1 };
fooA.sum = (num) => num + 2;
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);
console.log(
  [1,2,3].map(el => fooC.sum(el))
); //=> [ 3, 4, 5 ]



/*
//2
let map = {one: true, two: true, hasOwnProperty: true};
console.log(map.hasOwnProperty("one")); 

//Answer:
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true

//3
let person = {
  name: 'Jane',
  printName() {
    console.log(`My name is ${this.name}.`);
  }
};

const logName = person.printName;
logName();

//4
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} says: Woof! Woof!`);
};

let fido = new Dog('Fido');
fido.bark(); // 'Fido says: Woof! Woof!!'
console.log(fido instanceof Dog); // true
//What if we remove `new`? How to make it work without `new`?

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
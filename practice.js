
'use strict';
/*
Memory Dump
  S.  J. 
- [x] [x] object-oriented programming 
- [x] [x] The `new` keyword 
- [x] [x] static properties and methods 
- [x] [x] mixins 
- [x] [x] inheritance 
- [x] [x] polymorphism 
- [x] [x] encapsulation
- [x] [x] factory functions
- [x] [x] OLOO 
- [] [x] Property sequence lookup 
- [] [x] Prototype chain 
- [] [] constructors
- [] [] The private `[[Prototype]]` property 
- [] [] Collaborator objects
- [] [] Execution context and the value of `this`
- [] [] Context Loss
- [] [] The global object
- [] [] Higher-order functions 
- [] [] Invoking methods on a primitive value 
- [] [] `instanceof` vs `typeof`
- [] [] `constructor` property
- [] [] different ways we can check an object come from constructor function 

NOTES 
- property sequence lookup and prototype chain are interelated 

copying method out of object
passing object as a function
nested functions


`new`

1. creates an empty object
2. sets the [[Protoype]] property of the object to the object referenced 
   by the constructors prototype property
3. sets the object as the value of this inside the constructor function
4. invokes the function
5. returns the value of this unless the constructor explicitly returns another object
   
*/


/*
Mix in example
Polymorphism example
constructor/prototype example
class example
OLOO example
factory function example
Prototypal inheritance
Pseudo-Classical inheritance
*/

// Mix - in

/*
let WaterDriveable = {
  driveOnWater() {
    console.log('Driving on water');
  }
}

class Plane {
  fly() {
    console.log('Flying');
  }
}

class Jet extends Plane {}

class SeaPlane extends Plane {}
Object.assign(SeaPlane.prototype, WaterDriveable);

class MotorBoat {}
Object.assign(MotorBoat.prototype, WaterDriveable);
*/

// Polymorphism through Duck-typing

/*
class Wrench {
  info() {
    console.log("I'm a wrench!");
  }
}

class Tree {
  info() {
    console.log("I'm a tree!");
  }
}

class Person {
  info() {
    console.log("I'm a person!");
  }
}

[new Wrench(), new Tree(), new Person()].forEach(obj => {
  obj.info();
});

*/
// Polymorphism through inheritance

/*
class Animal {
  makeSound() {
    console.log('Animal Sound');
  }
}

class Cow extends Animal {
  makeSound() {
    console.log('Moo');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow');
  }
}

class Fish extends Animal {}

[new Cow(), new Dog(), new Cat(), new Fish()].forEach(obj => {
  obj.makeSound();
});
*/

// constructor prototype

/*

function Animal(type) {
  this.type = type;
}

function Dog(name) {
  Animal.call(this, 'Dog');
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let dog1 = new Dog('Arlo');
console.log(Object.getPrototypeOf(dog1) === Dog.prototype);
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);

*/

// ES6 Classes

/*
class Animal{
  constructor(type) {
    this.type = type;
  }
}

class Dog extends Animal {
  constructor(name) {
    super('Dog');
    this.name = name;
  }
}

let dog1 = new Dog('Arlo');
console.log(dog1);

*/

// OLOO

/*
let dogPrototype = {
  init(name) {
    this.name = name;
    return this;
  },

  makeNoise() {
    console.log('Woof');
  }
}

let dog = Object.create(dogPrototype).init('Arlo');
console.log(dog);
dog.makeNoise();
*/

// Factory Function

/*

function createPerson(name, age) {
  return {
    name,
    age,
  
    sayHi() {
      console.log(`${this.name} says Hi!`);
    }
  }
}

let person1 = createPerson('Jack', 28);
console.log(person1);
*/

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  
}

let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015
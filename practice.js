
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

// Polymorphism

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
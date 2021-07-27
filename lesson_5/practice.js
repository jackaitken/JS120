function Animal() {}

function Dog() {}
Dog.prototype = Object.create(Animal.prototype); 
Dog.prototype.constructor = Dog; 

function Husky() {}
Husky.prototype = Object.create(Dog.prototype); 
Husky.prototype.constructor = Husky; 

function LabradorRetriever() {} 
LabradorRetriever.prototype = Object.create(Husky.prototype); 
LabradorRetriever.prototype.constructor = LabradorRetriever; 

function Labsky() {}
Object.setPrototypeOf(Labsky, LabradorRetriever.prototype);
// Labsky.prototype = Object.create(LabradorRetriever.prototype); 
// Labsky.prototype.constructor = Labsky; 

const labsky = new Labsky();

console.log(Object.getPrototypeOf(Labsky));
debugger;

// ES6 Classes

// class Animal {}

// class Dog extends Animal {}

// class Husky extends Dog {}

// class LabradorRetriever{}

// class Labsky extends LabradorRetriever {}

// let labsky = new Labsky();

// console.log(Object.getPrototypeOf(Object.getPrototypeOf(labsky)); // Labsky.prototype
// console.log(Object.getPrototypeOf(Labsky) === LabradorRetriever); // true
// console.log(Object.getPrototypeOf(new Labsky()) === Labsky.prototype);
// // console.log(Object.getPrototypeOf(LabradorRetriever.prototype)); // Husky.prototype
// // console.log(Object.getPrototypeOf(Husky.prototype)); // Dog.prototype
// // console.log(Object.getPrototypeOf(Dog.prototype)); // Animal.prototype
// // console.log(Object.getPrototypeOf(Animal.prototype)); // Object.prototype
// // console.log(Object.getPrototypeOf(Object.prototype)); //  null
// debugger;


// OLOO

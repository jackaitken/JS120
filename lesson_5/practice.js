// Update the following code so that, instead of logging the values
//each statement logs the name of the constructor to which it belongs.

console.log("Hello");
console.log([1,2,3]);
console.log({name: 'Srdjan'});


console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);


// Create an empty class named Cat.

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}`);
  }
}

let kitty = new Cat('Arlo');
kitty.greet();

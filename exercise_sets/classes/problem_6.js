class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}`);
  }
}

let kitty = new Cat('Arlo');
kitty.greet() // Hello! My name is Arlo
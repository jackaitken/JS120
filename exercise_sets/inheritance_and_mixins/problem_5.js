const walkMixin = {
  walk() {
    return "Let's go for a walk"
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}
Object.assign(Cat.prototype, walkMixin);

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());

/*
Here we've used a mixin to allow the Cat class access
to a method called walk. This is particularly
useful if we have a method that might be useful for a couple of
classes but not all. 
*/

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

Dog.prototype.bark() = function() {
  console.log('Bark');
}

let dog = new Dog('Arlo', 5);

// Explain how the `new` keyword works in this code snippet

/*
When a function is invoked with the `new` keyword, the function is treated as 
a constructor function. The `new` keyword does 4 things:

1. It creates a blank object (this object will become our new instance)
2. It sets the private `[[Protoype]]` property of that blank object to `Dog.prototype`
3. Then the constructor function `Dog` is invoked and the execution context is set to the 
   new blank object. The constructor function sets the properties `name` and `age` in the blank
   blank object.
4. Finally, unless the constructor function explicitly returns another object, `new` will return
   the value of `this` (our new instance).

This new instance is returned and assigned to the global variable `dog`.
*/
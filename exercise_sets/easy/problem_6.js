class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getWheels() {
    switch (this.constructor.name) {
      case 'Car': return 4;
      case 'Motorcycle': return 2;
      case 'Truck': return 6;
    }
  }

  info() {
    return `${this.make} ${this.model}`
  }
}

class Car extends Vehicle {}

class Motorcycle extends Vehicle {}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }
}

let car = new Car('blah', 'bhdeb');
let moto = new Motorcycle('rfr', 'dewd');
let truck = new Truck('deew', 'bhdwceb', 5);
console.log(moto.getWheels());
console.log(truck.getWheels());

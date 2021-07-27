class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
  }
}

class Car extends Vehicle {
  constructor(year){
    
  }
}

let truck = new Truck(2003);
console.log(truck.this); // 2003

let car = new Car(2015);
console.log(car.this); // 2015
debugger;
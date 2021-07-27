class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType
  }

}

class Car extends Vehicle {}

let truck1 = new Truck(2003, 'Short');
console.log(truck1.year);
console.log(truck1.bedType);

/*
Because not all vehicles have a bed type, it makes
sense that we only accept a bedType for Truck. 

In order then to use the year property from Vehicle 
we need to call super and pass in year. We don't need
to pass in bedType since it's only defined on Truck.
*/
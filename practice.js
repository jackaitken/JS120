// Mix-ins

let WaterDrivable = {
  driveOnWater() {
    console.log('Driving on Water');
  }
}

class Plane {
  constructor() {
    Plane.allPlanes.push(this);
  }

  fly() {
    console.log('Flying');
  }

  getAllPlanes() {
    console.log('---Planes that have been made---');
    Plane.allPlanes.forEach((plane, index) => {
      console.log(`${index + 1}: ${plane.constructor.name}`);
    });
  }
}
Plane.allPlanes = [];

class Jet extends Plane {}

class Boat {}

class MotorBoat extends Boat {}

class SeaPlane extends Plane {}
Object.assign(SeaPlane.prototype, WaterDrivable);

let plane = new SeaPlane();
let plane2 = new Jet();

plane.getAllPlanes();
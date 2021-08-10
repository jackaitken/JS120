// Mix-ins

let WaterDrivable = {
  driveOnWater() {
    console.log('Driving on Water');
  }
}

class Plane {
  fly() {
    console.log('Flying');
  }
}

class Jet extends Plane {}

class Boat {
  driveOnWater() {
    console.log('Driving on Water');
  }
}

class MotorBoat extends Boat {}

class SeaPlane extends Plane {}
Object.assign(SeaPlane.prototype, WaterDrivable);

let plane = new SeaPlane();
plane.driveOnWater();
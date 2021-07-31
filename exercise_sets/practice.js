function Olympian(name, country) {
  debugger;
  this.name = name;
  this.country = country;
}

Olympian.prototype.info = function() { // Creating a method called info
  return `${this.name} competes in the Olympics`; 
}

function Gymnast(name, country) {
  Olympian.call(this, name, country); // Reusing the Olympian constructor
}

Gymnast.prototype = Object.create(Olympian.prototype); // Add Olympian to Gymnast's prototype chain
Gymnast.prototype.constructor = Gymnast; // Reset the constructor of Gymnast

Gymnast.prototype.info = function() { // Overwriting the info method
  return `${this.name} is a Gymnast for the ${this.country}`; 
}

let simone = new Gymnast('Simone Biles', 'United States');
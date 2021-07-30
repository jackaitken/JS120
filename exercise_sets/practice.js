function Olympian(name, event) {
  this.name = name;
  this.event = event;
}

Olympian.prototype.compete = function() {
  return `${this.name} competes in ${this.event}`;
}

let simone = new Olympian('Simone Biles', 'Gymnastics');

simone instanceof Olympian; //true
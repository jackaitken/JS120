class Pet {
  constructor(animal, name) {
    this.animal = animal;
    this.name = name;

  }

  info() {
    return `a ${this.animal} name ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet)
  }

  numberOfPets() {
    return this.pets.length;
  }

  printPets() {
    this.pets.forEach(pet => console.log(pet.info()));
  }

}

class Shelter {
  constructor() {
    this.owners = {};
    this.unadopted = [];
    this.adopted = [];
  }

  addPet(animal, name) {
    let pet = new Pet(animal, name);
    this.unadopted.push(pet);
    return pet;
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    this.adopted.push(pet);
    this.unadopted.splice(this.unadopted.indexOf(pet), 1);
    if (!this.owners[owner.name]) {
      this.owners[owner.name] = owner;
    }
  }

  printAdoptions() {
    for (let name in this.owners) {
      console.log(`${name} has adopted ${this.owners[name].numberOfPets()} pets`);
    }
  }

  printNotAdopted() {
    console.log('The Animal Shelter has the following unadopted pets:');
    this.unadopted.forEach(pet => {
      console.log(pet.info());
    });
    console.log('  ...');
  }
}

let shelter = new Shelter();

let butterscotch = shelter.addPet('cat', 'Butterscotch');
let pudding = shelter.addPet('cat', 'Pudding');
let darwin = shelter.addPet('bearded dragon', 'Darwin');
let kennedy = shelter.addPet('dog', 'Kennedy');
let sweetie = shelter.addPet('parakeet', 'Sweetie Pie');
let molly = shelter.addPet('dog', 'Molly');
let chester = shelter.addPet('fish', 'Chester');
let asta = shelter.addPet('dog', 'Asta');
let laddie = shelter.addPet('dog', 'Laddie');
let fluffy = shelter.addPet('cat', 'Fluffy');
let kat = shelter.addPet('cat', 'Kat');
let ben = shelter.addPet('cat', 'Ben');
let chatterbox = shelter.addPet('parakeet', 'Chatterbox');
let bluebell = shelter.addPet('parakeet', 'Bluebell');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printNotAdopted();
shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
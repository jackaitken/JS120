let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName); // NaN

/*
The context of 'this' when used outside of a function is bound to the 
global object. Here, this.firstName and this.lastName will attempt to find
two properties in the global object, but will return undefined.
*/
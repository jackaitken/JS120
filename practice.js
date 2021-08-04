/*
You have recently watched Lion King as well as Jungle Book and have decided to take the best
of both these worlds and develop some OOP magic. In this Lion King x Jungle Book world of ours, 
Lions have two characteristics:
1) they are friendly;
2) they are in the Lion King
Lions also have certain behavior, namely they roar and say 'Hakuna Matata'

Tigers, likewise, have two characteristics:
1) they enjoy swimming;
2) they are in the Jungle Book
Tigers also have certain behavior, namely they chase and say 'I am chasing the man-cub'

Your task is to create a Liger (https://en.wikipedia.org/wiki/Liger).
A Liger is an animal whose father is a Lion and whose mother is a Tiger. 
The liger you create should inherit ALL properties and functionality from its parents, as follows:

console.log(liger.roar()) // 'Hakuna Matata'
console.log(liger.chase()) // 'I am chasing the man-cub'
console.log(liger.inLionKing) // true
console.log(liger.isFriendly) // true
console.log(liger.enjoysSwimming) // true
console.log(liger.inJungleBook) // true

Please construct this relationship using the following patterns:
1) Constructor Prototypes
2) OLOO
3) Factory functions

How you set up the relationship between the child liger, and parent Lion and Tiger is up to you.
*/

// let TigerBehavior = {
//   chase() {
//     return 'I am chasing the man-cub';
//   }
// }

// function Lion() {
//   this.isFriendly = true;
//   this.inLionKing = true;
// }

// Lion.prototype.roar = function() {
//     return 'Hakuna Matata';
// }

// function Tiger() {
//   this.enjoysSwimming = true;
//   this.inJungleBook = true;
// }

// function Liger() {
//   Lion.call(this);
//   Tiger.call(this);
// }

// Liger.prototype = Object.create(Lion.prototype);
// Object.assign(Liger.prototype, TigerBehavior);

// let liger = new Liger();


let LionMixin = {
  isFriendly: true,
  inLionKing: true,

  roar() {
    return 'Hakuna Matata';
  }
}

let ligerPrototype = {
  init() {
    this.enjoysSwimming = true;
    this.inJungleBook = true;
    return this;
  },

  chase() {
    return 'I am chasing the man-cub';
  }
}

Object.assign(ligerPrototype, LionMixin);

let liger = Object.create(ligerPrototype).init();



console.log(liger.roar()) // 'Hakuna Matata'
console.log(liger.chase()) // 'I am chasing the man-cub'
console.log(liger.inLionKing) // true
console.log(liger.isFriendly) // true
console.log(liger.enjoysSwimming) // true
console.log(liger.inJungleBook) // true
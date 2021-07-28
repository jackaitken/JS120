/*
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());

*/

/*
The expected output in this example is:

[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]

but we get:
[ 'undefined 1', 'undefined 2', 'undefined 3' ]

This is because the callback function is a nested function
so it's context is bound to the global object instead of the 
franchise object. We can take care of this a number of ways, but
perhaps easiest is to just use an arrow function. Nested arrow functions 
in this instance inherit the context of the surrounding function.
*/

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(number => {
      return this.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

/*
This doesn't work as expected because the execution context inside of 
increment is the global object. For it to work as expected we could do this
*/

let foo = {
  a: 0,
  incrementA: function() {
    let increment = () => {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA(); // 1
foo.incrementA(); // 2
foo.incrementA(); // 3

/*
Arrow functions inherit their context from the surrounding code.
The context of incrementA is foo.
*/

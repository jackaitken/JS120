/*
1. What is OLOO and how does is differ from the constructor/prototype pattern?

2. Explain using an example what the bind method is and how it works.
    a. How does it differ from the call and apply methods?

3. Using an example explain the differences between prototypal and pseudo-classical inheritance

4. 
*/

// 3

function greet() {
  let firstName = 'Sergio';
  return `${this}`;   // TypeError
}

console.log(greet()); // "Sergio"
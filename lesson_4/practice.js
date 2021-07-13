class Greeting {
  greet(string) {
    console.log(string);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet('Hello');
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet('Goodbye')
  }
}

let hi = new Hello();
let bye = new Goodbye();

hi.hi();
bye.bye();

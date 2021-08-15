function go(klass, arg) {
  let obj = new klass(arg);
  return obj.foo + obj.bar() + klass.qux();
}

class something {
  constructor(arg) {
    this.foo = arg;
  }
  
  static qux = function() {
    return 2;
  }
  
  bar() {
    return 3;
  }
}

console.log(go(something, 5)); // 10 (note: same as 5 + 3 + 2)
console.log(go(something, 3)); // 8  (note: same as 3 + 3 + 2)
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `[Rectangle ${this.length} x ${this.width}]`;
  }
}

class Square extends Rectangle{
  constructor(size) {
    super(this, this);
  }

  toString() {
    return `[Square ${this.length} x ${this.width}]`;
  }
}
debugger;
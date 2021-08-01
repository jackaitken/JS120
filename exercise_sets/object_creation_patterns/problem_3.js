class CircularQueue {
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.bufferPosition = 0;
    this.orderOfAdditon = [];
    this.buffer = Array(bufferSize).fill(null);
  }

  enqueue(number) {
    if (this.buffer[this.bufferPosition] !== null) this.removeFromAdditonArr();
    this.buffer[this.bufferPosition] = number;
    this.orderOfAdditon.push(this.bufferPosition);
    this.advanceBuffer();
  }

  advanceBuffer() {
    if (this.bufferPosition === this.buffer.length - 1) {
      this.bufferPosition = 0;
    } else {
      this.bufferPosition += 1;
    }
  }

  removeFromAdditonArr() {
    this.orderOfAdditon.shift();
  }

  isFull() {
    return this.buffer.every(cell => cell !== null);
  }

  dequeue() {
    if (this.buffer.every(cell => cell === null)) return null;
    let oldest = this.orderOfAdditon.splice(0, 1)[0];
    let number = this.buffer[oldest]
    this.buffer[oldest] = null;
    return number;
  }
}
let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
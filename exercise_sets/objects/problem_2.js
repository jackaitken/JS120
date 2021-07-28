let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let disc = item.price * percent / 100;
    return item.price - disc;
  }
};


console.log(item.discount(20));   // should return 40

console.log(item.discount(50));   // should return 25

console.log(item.discount(25));   // should return 37.5


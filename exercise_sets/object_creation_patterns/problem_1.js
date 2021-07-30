
let foo = {
  name: 'foo',
};


let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

foo.ancestors = function(context = this, arr = []) {
  let parent = Object.getPrototypeOf(context);

  if (!parent.name) {
    arr.push('Object.prototype');
    return arr;
  }

  arr.push(parent.name);
  return this.ancestors(parent, arr);
}

console.log(bar.ancestors());
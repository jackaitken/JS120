const OPERATIONS = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
  '/': (num1, num2) => num1 / num2,
};

let getOperation = operation => {
  debugger;
  return OPERATIONS[operation];
};

let compute = function(operation, num1, num2) {
  debugger;
  return operation(num1, num2);
};

compute(getOperation('%'), 9, 4)) === 5;
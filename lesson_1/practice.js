'use strict';

function func() {
  console.log(`this refers to ${this}`);
};

func()
// this refers to undefined
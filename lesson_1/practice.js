function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

logNum.call(obj); // 42
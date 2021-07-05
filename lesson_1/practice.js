let obj = {
  logNum() {
    console.log(this.num);
  }
};

let obj1 = {
  num: 2
}

obj.logNum.call(obj1); // 2
// Functionally same as
obj1.logNum = obj.logNum;
obj1.logNum(); // 2
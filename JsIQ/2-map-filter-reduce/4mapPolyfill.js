// Polyfill for map()
//Array.map((currentEle, index, numsArr)=>{})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const numsArr = [1, 2, 3, 4];
const multiplyThree = numsArr.myMap((currentEle, index, numsArr) => {
  return currentEle * 3;
});
console.log(multiplyThree);

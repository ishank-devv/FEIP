//Pollyfill for filter
//Array.filter((currentEle, index, numsArr)=>{})

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const numsArr = [1, 2, 3, 4];

//only return those values which satiusfies the conditions of callback
const moreThanTwo = numsArr.myFilter((currentEle, index, numsArr) => {
  return currentEle > 2;
});

console.log(moreThanTwo);

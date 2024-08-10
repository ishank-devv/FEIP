//Polyfill for reduce()

//accumulator- 0 (initial value)( provided as param)
//accumulator = first element of array- if there's no initial value
//it takes first element of array as initial value for accumulator
//and currentEle is assigned as 2nd value

//this-> numsArr
//i->index
//this[i]-> currentEle

//arr.reduce((accumulator,currentEle,index, numsArr)=>{},initialValue)
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    //if accumulator is not empty, ie. true then cb(accumulator, this[i], i, this) else assign first element of array
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const numsArr = [1, 2, 3, 4];
const sum = numsArr.myReduce((accumulator, currentEle, index, numsArr) => {
  return accumulator + currentEle;
}, 0);
console.log(sum);

const numsArr = [1, 2, 3, 4];

//reducing the array to one value(sum of array)
//accumulator- 0 (initial value)( provided as 2nd param)
//accumulator = first element of array- if there's no initial value
//it takes first element of array as initial value for accumulator
const sum = numsArr.reduce((accumulator, currentEle, index, numsArr) => {
  return accumulator + currentEle;
}, 0);

console.log(sum);

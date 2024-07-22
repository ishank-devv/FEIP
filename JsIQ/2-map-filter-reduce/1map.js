const numsArr = [1, 2, 3, 4];

//map is used to create new array using existing ones by applying function to each element of existing array
//using currentEle
const multiplyThree = numsArr.map((currentEle, index, numsArr) => {
  return currentEle * 3;
});
console.log(multiplyThree);

//using currentEle + index
const multiplyThreePlusIndex = numsArr.map((currentEle, index, numsArr) => {
  return currentEle * 3 + index;
});
console.log(multiplyThreePlusIndex);

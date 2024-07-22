const numsArr = [1, 2, 3, 4];

//only return those values which satiusfies the conditions of callback
const moreThanTwo = numsArr.filter((currentEle, index, numsArr) => {
  return currentEle > 2;
});

console.log(moreThanTwo);

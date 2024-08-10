// Polyfill for map()
// basically we're adding the "myMap" function to the methods of "Array" in current JS file
// map returns completly new array, so temp = []
// this.length -> referring to parent array
//
// Array.map((currentEle, index, numsArr)=>{})
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this)); // calling logic which in this case is at line 18
  }
  return temp;
};

const numsArr = [1, 2, 3, 4];
//using myMap instead of .map from map example
const multiplyThree = numsArr.myMap((currentEle, index, numsArr) => {
  return currentEle * 3;
});
console.log(multiplyThree);

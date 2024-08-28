//Q4- Currying vs Partial Application
//partial - here we have 3 arguments but only returning 2 function
//currying- 3 arguments 3 function returning

//partial application
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}
const x = sum(10);
console.log(x(5, 6));
console.log(x(3, 2));
//or
console.log(sum(20)(1, 4));

//currying
function sumCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const y = sumCurry(1)(2)(3);
console.log("y", y);

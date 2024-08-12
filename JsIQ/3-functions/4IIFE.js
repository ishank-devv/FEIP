// Q4 - What is IIFE ?
// Immediately invoked function expression

function square(num) {
  console.log(num * num);
}
square(5);

(function squareIIFE(num) {
  console.log(num * num);
})(5);

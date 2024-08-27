//Closure IQ- output based
// Q1: What will be logged to console?

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; // shadowing global count
    console.log(count); // 1
  }
  console.log(count); // 0, here count = 0, as count =1 was in block scope only
})();

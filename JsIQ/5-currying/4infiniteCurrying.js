// write function with n number of parameters
// Q3- Infinite Currying -> sum(1)(2)(3)....(n)

// sum(1)(2); //3
//this should be flexible acc to number of parameters
//and should give answers accordingly
// sum(1)(2)(4)(5)(); //12

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(2)(4)(8)(10)());

// Q6 - Curry() implementyation( most important for SENIOR INTERVIEWS)
// function curry() converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
  console.log(func);
  return function curriedFunc(...args) {
    console.log("lengths", args.length, func.length);
    //args is array of all the arguments
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

//in the end args.length equals func.length, the line 10 calls
// sum function providing all arguments
//not curried function-
const sum = (a, b, c, d) => a + b + c + d;
const totalSum = curry(sum);
console.log(totalSum(1)(6)(5)(6));

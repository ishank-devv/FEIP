// Currying in JS
// Q2-
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("substract")(4)(2) => 2

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid Operation";
    };
  };
}

// to use it single time
console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("substract")(4)(2));
console.log(evaluate("substractsssssssss")(4)(2));

//when you need to use the same operation multiple times,
//you can use mul multiple times
//intialising function multiply once
const mul = evaluate("multiply");
//using mul multiple times
console.log(mul(3)(5));
console.log(mul(4)(5));
console.log(mul(5)(5));

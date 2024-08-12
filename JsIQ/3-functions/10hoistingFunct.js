// 10- Function Hoisting- And var is function scope
//functions are hoisted completely unlike how variable is hoisted

functionName(); // Function Hoisting- And var is function scope

function functionName() {
  console.log(x); //undefined
  var x = 5;
  console.log("Function Hoisting- And var is function scope");
}

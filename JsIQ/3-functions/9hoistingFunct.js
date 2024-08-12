// Q9- Function Hoisting- And var is global scope
//functions are hoisted completely unlike how variable is hoisted

functionName(); // workattech
console.log(x); //undefined

function functionName() {
  console.log("workattech");
}

//variable is hoisted
var x = 5;

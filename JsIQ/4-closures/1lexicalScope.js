//closure:
// A closure is the combination of a function bundled together ( enclosed)
// with references to its surrounding state( the lexical environment).
// In other words, a closure gives you acess to an outer function's scope
// from an inner function.
//In JS, closures are created everytime a function is created, at function creation time.

//Lexical Scope:
// A variable defined outside the function can be accessible inside
// of another function defined after a variable declaration but
// opposite is not true( variabl defined inside the function will not be accessible ouside the function)

//Global
var username = "Global Variable";

function local() {
  //local scope
  console.log(username);
}
local();

//opposite is not true
//Global
function local2() {
  //local scope
  var username2 = "Global Variable";
}
console.log(username2); // ReferenceError: username2 is not defined
local2();

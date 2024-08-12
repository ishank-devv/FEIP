//Q6-Function Scope

var num1 = 20,
  num2 = 3,
  name = "Coder Coding";

function multiply() {
  return num1 * num2;
}

multiply(); //  60
console.log(multiply());

//A nested function example
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}

getScore();
console.log(getScore());

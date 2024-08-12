// were introduced in ES6 version of JS
// Arrow functions

//normal function
const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

//converting it into arrow function
const addArrow = (firstNum, secondNum) => {
  return firstNum + secondNum;
};

//optimizing arrow funct if there is only one line to return
const oneLineArrow = (firstNum, secondNum) => firstNum + secondNum;

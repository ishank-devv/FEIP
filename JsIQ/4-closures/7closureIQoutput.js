// closures in Javascript
//Q2: Write a function that would allow you to do this

// call createBase(6) which is returning closure addSix
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

function createBase(num1) {
  return function (num2) {
    console.log(num2 + num1);
  };
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
addSix(28); // returns 34

//USECASE:
//its going to add 6 for addSix(21) because it has made closure
// with num1 = 6 even after the inner function is returned once

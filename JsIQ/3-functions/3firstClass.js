// Q3- What are First Class Functions ?
// A function can be treated like a variable which means
// function can be passed into another function, can be used, manipulate
// and returned from those functions.
// Basically everything a variable can do those function can do

function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is " + fn(5));
}

displaySquare(square);

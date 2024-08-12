// q17- Rest Spread Output Based ques

//Rest only eg1
console.log("function 1 starts");
const fn = (a, x, y, ...numbers) => {
  console.log(a, x, y, numbers);
};
fn(5, 6, 3, 7, 8, 9);
console.log("function 1 ends");

//Spread only eg2
console.log("function 2 starts");
const fn2 = (a, x, y, z) => {
  console.log(a);
  console.log(x);
  console.log(y);
  console.log(z);
};
let arr2 = [3, 7];
//Spread- spread operator can be used anywhere unlike rest, because its just spreading the values
fn2(5, 6, ...arr2, 8, 9);
console.log("function 2 ends");

//Rest Spread- eg3
//Rest
console.log("function 3 starts");
const fn3 = (a, x, y, ...numbers) => {
  console.log(a);
  console.log(x);
  console.log(y);
  console.log(numbers);
};
let arr3 = [3, 7];
//Spread- spread operator can be used anywhere unlike rest, because its just spreading the values
fn3(5, 6, ...arr3, 8, 9);
console.log("function 3 ends");

// q16- Rest Output Based ques

//Rest
const fn = (a, x, y, ...numbers) => {
  console.log(a, x, y, numbers);
};

fn(5, 6, 3, 7, 8, 9);

const fn2 = (a, x, y, ...numbers) => {
  console.log(a);
  console.log(x);
  console.log(y);
  console.log(numbers);
};

let arr = [3, 7];
fn2(5, 6, ...arr, 8, 9);

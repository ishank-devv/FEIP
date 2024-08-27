//Closure IQ ouput
// Q3: Time Optimization

// AFTER TIME OPTIMIZATION
// how can we use closures to optimize time in our code
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  // using closure we're optimizing the time it takes to return the output
  // because
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find(); // for line 7 to line 10, the array has been created once only for find(6) and find(50)
console.time("6");
closure(6); // just accessing of a[6] from a = [] populated in for loop
console.timeEnd("6");

console.time("50");
closure(50); // just accessing of a[50] from a = [] populated in for loop
console.timeEnd("50");

//CHATGPT EXPLAINATION
// https://chatgpt.com/share/a80e4324-94fa-4bc3-a38f-e1da40e5c1dc

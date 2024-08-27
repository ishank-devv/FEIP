//Closure IQ ouput
// Q3: Time Optimization

// BEFORE TIME OPTIMIZATION
// how can we use closures to optimize time in our code
function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]); // accessing value of a[6] or a[50] from the array which got populated
}

console.time("6");
find(6); // 1st time a= [] is being populated and then accessed the a[6] value
console.timeEnd("6");

console.time("50");
find(50); // 2nd time a= [] is being populated and then accessed the a[50] value
console.timeEnd("50");

// Q7 - Function Scope- O/P Based Question

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("let", i);
  }, i * 1000);
}

//let has a block scope

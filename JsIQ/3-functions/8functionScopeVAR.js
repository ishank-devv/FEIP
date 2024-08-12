// Q8 - Function Scope- O/P Based Question

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("var", i);
  }, i * 1000);
}

// var doesn't have block scope

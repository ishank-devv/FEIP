// Q11- Function Hoisting- O/P Based Question

var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun();

// x = 21 is present in global scope
// x = undefined is present in local/function scope when line 6 is executing
// x is already there in local/function scope so we won't look for
// x in global scope

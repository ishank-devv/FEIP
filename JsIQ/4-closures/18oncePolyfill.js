// Closures in Javscript
// loadash library already has more generic function(implementation of once function)
// Q8: Once Polyfill

function once(func, context) {
  // determines if funct ran once or not
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

// without once polyfill
const hello = () => console.log("hello");
hello();
hello();
hello();
hello();

//with once- no arguments
const hello2 = once(() => console.log("hello2"));
hello2();
hello2();
hello2();
hello2();

//
const hello3 = once((a, b) => console.log("hello3", a, b));
hello3(1, 2);
hello3(1, 2);
hello3(1, 2);
hello3(1, 2);

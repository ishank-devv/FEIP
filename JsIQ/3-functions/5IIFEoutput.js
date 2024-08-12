// Q5 - IIFE - O/P Based Questions ?

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

//happens because of closure

//Q9: Memoize Polyfill

//with memoize polyfill
// res ={
// "5,6": 30
//};
function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      //if context doesn't exist just use current context(this)
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clusmsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};

const memoizedClumzyProduct = myMemoize(clusmsyProduct);

console.time("First call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("Second call");

// if parameters of functions are same,
// how do we minimize this time calculations
// we need to cache result of previous function

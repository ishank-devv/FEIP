//Q9: Memoize Polyfill

//without memoize polyfill
const clusmsysquare = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};

console.time("First call");
console.log(clusmsysquare(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(clusmsysquare(9467, 7649));
console.timeEnd("Second call");

// if parameters of functions are same,
// how do we minimize this time calculations
// we need to cache result of previous function
// refer 20

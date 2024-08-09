//1.global scope
var a = 5;
console.log(a);

//2.block scope
{
  let b = 10;
  const c = 15;
  console.log(b);
  console.log(c);
}
console.log(b); //ReferenceError: b is not defined
console.log(c); //ReferenceError: c is not defined

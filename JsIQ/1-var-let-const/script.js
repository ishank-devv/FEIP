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
// console.log(b); //error
// console.log(c); //error

//3.ILLEGAL SHADOWING
function test() {
  var d = "Hello";
  let e = "Bye";

  if (true) {
    let d = "Hi"; // can shadow var with let
    //uncomment below line - SyntaxError: Identifier 'e' has already been declared
    // var e = "GoodBye"; // can't shadow let with var
    console.log(d);
    console.log(e);
  }
}
test();

//4.RE-Declaration in same scope

// can re-decalre
var f;
var f;

// SyntaxError: Identifier 'b' has already been declared
let g;
// let g;

// SyntaxError: Missing initializer in const declaration
// const h;
// const h;

//5. Declaration without initialisation
var i;
let j;
// const k; // SyntaxError: Missing initializer in const declaration

//6. RE-INITIALISATION

var l = 5;
l = 6;
let m = 10;
m = 11;
const n = 15;
// n = 16; //TypeError: Assignment to constant variable.

//7. HOISTING

console.log(count);
console.log(countLet);
var count = 1;
let countLet = 2; //countLet hoisted in temporal dead zone( counLet= <value unavailable>/undefined) and can't be access before initialisation

function abc() {
  console.log(a, b, c);

  const c = 30;
  let b = 20;
  var a = 10;
}
abc();

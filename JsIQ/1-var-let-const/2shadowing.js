// while shadowing a variable it should not cross boundary of scope ie.
// we can shadow var with let ( also legal shadowing )
// - let let
// - var let
// but can't shadow let with var( iLLegal shadowing)
// - let-var

//variable shadowing(legal) let-let
function test() {
  let a = "function scope";

  if (true) {
    let a = "block scope";
    console.log(a);
  }
  console.log(a);
}
test();

let a;
{
  let a;
}

//variable shadowing(legal) var-let
function test2() {
  var a = "function scope 2";

  if (true) {
    let a = "block scope 2";
    console.log(a);
  }
  console.log(a);
}
test2();

var b;
{
  var b;
}

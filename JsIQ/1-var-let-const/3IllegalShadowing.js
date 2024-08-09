// while shadowing a variable it should not cross boundary of scope ie.
// we can shadow var with let ( also legal shadowing )
// - let let
// - var let
// but can't shadow let with var( iLLegal shadowing)
// - let-var

//Illegal shadowing let-var(illegal)
function test1() {
  let a = "function scope test1";

  if (true) {
    // var a = "block scope test1";
    console.log(a); // SyntaxError: Identifier 'a' has already been declared
  }
  console.log(a);
}
test1();

//ILLEGAL SHADOWING- eg2
function test2() {
  var a = "function scope var";
  let b = "function scope let";

  if (true) {
    let a = "block scope let"; // can shadow var with let
    //uncomment below line - SyntaxError: Identifier 'b' has already been declared
    // var b = "GoodBye"; // can't shadow let with var
    console.log(a);
    console.log(b);
  }
}
test2();

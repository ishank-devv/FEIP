//Closure IQ output based
// Q4: Block Scope and setTimeout with closure

function aVar() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // what is logged ?
    }, i * 1000);
  }
}
aVar();

//// EXPLAINATION
//// var doesn't have a block scope
//// var has a function scope
//// AND everytime loop runs setTimeout has created and it refers to
//// the value of i, at the end of loop value of i is 3 and we have 3 seperate
//// setTimeout referring to the same value 3

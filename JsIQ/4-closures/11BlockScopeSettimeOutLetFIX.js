//SOULTION TO the PROBLEM in 10 file using let
function aLet() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // what is logged ?
    }, i * 1000);
  }
}
aLet();

//// let is block scope
//// so for every setTimeout i is different
//// {
////     i = 0
//// }
//// {
////     i = 1
//// }
//// {
////     i = 2
//// }

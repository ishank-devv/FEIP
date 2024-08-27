//SOULTION TO the PROBLEM in 10 file using Var + closure

for (var i = 0; i < 3; i++) {
  // var i is function scope here
  function inner(i) {
    // i will be local variable inside this function/ local scope
    setTimeout(function log() {
      console.log(i); // what is logged ?
    }, i * 1000);
  }
  //i will behave as local scope
  inner(i);
}

// EXPLAINATION
// https://chatgpt.com/share/d798287d-3f3a-4bb9-b40a-2a1374e90c84fcf

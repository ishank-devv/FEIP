// This is called curring when we change
// f(a,b) into f(a)(b) format.

//there can be lot of levels to currying

// function f(a, b) {
//   console.log(a, b);
// }

function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

console.log(f(5)(6));

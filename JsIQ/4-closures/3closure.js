//closure

function makeFunc() {
  const name = "Mozilla";
  function displayName(num) {
    console.log(name, num);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc(5);
// or
// makeFunc()(5);

// USE of closure:
// closure makes it possible for a functions to have private variables
// JS closure is used to control what is and isn't in the scope of a
// particular function along with which variables are shared between
// sibling functions in the same containing scope

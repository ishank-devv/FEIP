// CLOSURE SCOPE CHAIN
// Every closure has 3 scopes
// 1. Local Scope( Own Scope )
// 2. Outer Functions Scope
// 3. Global Scope

//closure let "child" has access to scope of its "parent"
// and "grandparent"(parent's parent)
// 3. Global Scope(GrandPraent)
var username = "theUsername";
function makeFunc() {
  // 2. Outer Function Scope( parent )
  const name = "Mozilla";
  function displayName(num) {
    // 1. Local Scope/own scope( child )
    console.log(name, num, username);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc(5);

// CLOSURE SCOPE CHAIN
// Every closure has 3 scopes
// 1. Local Scope( Own Scope )
// 2. Outer Functions Scope
// 3. Global Scope

//closure let "child" has access to scope of its "parent"
// and "grandparent"(parent's parent)

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

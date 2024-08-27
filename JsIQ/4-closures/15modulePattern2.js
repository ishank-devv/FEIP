// Q6: what is Module Pattern ?
// https://chatgpt.com/share/790a4b4b-ec60-472b-b32c-0afa4dccba26

const myModule = (function () {
  // Private variables and functions
  let privateVariable = "I am private variable";

  function privateMethod() {
    console.log(privateVariable);
  }

  // Public variables and functions
  return {
    publicVariable: "I am public variable",

    publicMethod: function () {
      console.log("Accessing private method from public method:");
      privateMethod(); // Calling private method
    },
  };
})();

console.log(myModule.publicVariable); // Output: I am public

myModule.publicMethod();
// Output:
// Accessing private method from public method:
// I am private

// Trying to access private variables or methods directly will result in undefined or error
console.log(myModule.privateVariable); // Output: undefined
myModule.privateMethod(); // Error: myModule.privateMethod is not a function

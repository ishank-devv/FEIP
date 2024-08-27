// Q6: what is Module Pattern ?
//https://chatgpt.com/share/790a4b4b-ec60-472b-b32c-0afa4dccba26

var Module = (function () {
  function privateMethod() {
    console.log("private");
  }
  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();

Module.publicMethod(); // public
Module.privateMethod(); // TypeError: Module.privateMethod is not a function

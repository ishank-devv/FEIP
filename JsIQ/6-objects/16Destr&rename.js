//When you're destructuring name from user obj
//and name already exists

let user = {
  name: "The coder",
  age: 27,
};

const name = "The Person";

//fix is rename the key you're destructuring
const { name: myName } = user;

//SyntaxError: Identifier 'name' has already been declared
// console.log(name);

console.log(myName);

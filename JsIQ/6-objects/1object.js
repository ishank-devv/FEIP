//objects in JS

const user = {
  name: "The coder",
  age: 27,
};

//access the value inside obj
console.log(user.name);

//modifying/updating name
user.name = "A coder";
console.log(user.name);

//deleting propety in obj
//delete keyword is used when we want to delete property from obj
//and not a local variable
console.log(user);
delete user.age;
console.log(user);

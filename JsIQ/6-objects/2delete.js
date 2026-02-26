const user = {
  name: "The coder",
  age: 27,
};

//deleting propety in obj
//delete keyword is used when we want to delete property from obj
//and not a local variable
console.log(user);
delete user.age;
console.log(user);

//delete doesn't work with local variable
const func = (function (a) {
  delete a;
  return a;
})(5);
console.log(func);

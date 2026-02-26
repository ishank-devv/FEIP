//how to add, access, delete spaced-property
const user = {
  name: "The coder",
  age: 27,
  // add spaced-property
  "like this video": true,
};
console.log(user);

//access spaced-property
console.log(user["like this video"]);

//delete spaced-property
console.log(user);
delete user["like this video"];
console.log(user);

//Iterating through an obj
const user = {
  name: "The coder",
  age: 27,
  isTotallyAwesome: true,
};

//printing keys of obj user
console.log("keys---------------");
for (key in user) {
  console.log(key);
}

//printing values of obj user
console.log("values---------------");
for (key in user) {
  console.log(user[key]);
}

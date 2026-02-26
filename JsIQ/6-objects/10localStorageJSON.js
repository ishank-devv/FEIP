// HOW TO STORE OBJ IN LOCAL STORAGE

const user = {
  name: "The coder",
  age: 27,
};

//when tries to store obj directon, value will be [object object]
localStorage.setItem("test1", user);
console.log(localStorage.getItem("test1"));

// We can't store obj directly in our local storage
// We need to stringify obj to be able to store obj in local Storage
// in form of key: value pair
const strObj = JSON.stringify(user);

localStorage.setItem("test2", strObj);
console.log(localStorage.getItem("test2"));

console.log(JSON.parse(localStorage.getItem("test2")));

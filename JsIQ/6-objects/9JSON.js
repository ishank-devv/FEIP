//Q4- What's JSON.strigify and JSON.parse ?

const user = {
  name: "The coder",
  age: 24,
};

//1. how to convert this object into string
console.log(user);
const strObj = JSON.stringify(user);
console.log(strObj);
//can't acces keys like this, need to revert it back into a normal obj
console.log(strObj.name); // undefined
console.log(strObj["name"]); // undefined

//2. how to covert string obj into normal obj
const obj = JSON.parse(strObj);
console.log(obj);
console.log(obj.name);
console.log(obj["name"]);

//most common usecase for this is storing it in our local storage

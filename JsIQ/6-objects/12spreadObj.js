//Spreading user obj inside another admin object
// Q6- What's the output ?

const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);

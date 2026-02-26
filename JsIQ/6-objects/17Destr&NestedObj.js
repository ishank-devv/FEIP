// Destructuring in Nested obj

let user = {
  name: "The coder",
  age: 27,
  fullName: {
    first: "Santosh",
    last: "kumar",
  },
};

const { fullName } = user;
console.log(fullName);

//below is not renaming, renaming is fullname: first
//this is destructuring from nested object
const {
  fullName: { first },
} = user;
console.log(first);

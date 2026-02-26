//dynamic property

const property = "firstName";
const name = "Ishank";
// user should be like this
// firstName: Ishank

//not right
const user = {
  property: name,
};
console.log(user);

//right way
const user2 = {
  [property]: name,
};
console.log(user2);

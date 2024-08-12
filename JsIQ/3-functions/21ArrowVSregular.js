// Arrow functions vs Regular Function

//1- Syntax NORMAL
function square(num) {
  return num * num;
}

//1- Syntax ARROW
const squareArrow = (num) => {
  return num * num;
};

//2 - Implicit "return" keyword ( one line, no return used in ARROW )
const squareArrow2 = (num) => num * num;

//3- Arguments NORMAL
//we have'nt even passed the paramter in fn()
function fn() {
  console.log(arguments);
}
fn(1, 3, 2); //[1,3,2]

//3- Arguments ARROW
//
const fnArrow = () => {
  console.log(arguments);
};
// fnArrow(1, 3, 2); //ReferenceError: arguments is not defined at fnArrow

//***
//4- "this" keyword output based Ques
let user = {
  username: "kodakmovies",
  rc1: () => {
    console.log("Arrow Funct, subscribe to " + this.username);
  },
  rc2() {
    console.log("Normal Funct, Subscribe to " + this.username);
  },
};
user.rc1(); // Arrow Funct, subscribe to "undefined"
user.rc2(); // Normal Funct, Subscribe to "kodakmovies"
// because
// this of ARROW function points to "global object"
// this of REGULAR function points to "user object"

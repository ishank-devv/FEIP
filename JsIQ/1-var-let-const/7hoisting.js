//7. HOISTING

//when dubbeger is on line8
//scope-
//script- countLet: <value Unavailable> / undefined(used to be)
//global- countVar:undefined

console.log(countVar); // undefined
console.log(countLet); // ReferenceError: Cannot access 'countLet' before initialization
var countVar = 1;
let countLet = 2; // countLet hoisted in temporal dead zone( counLet= <value unavailable>/undefined) and can't be access before initialisation

//eg1- what would be the ouput
function abc() {
  console.log("a=", a);
  var a = 10;
  console.log("a=", a);
}
abc();

//eg3- what would be the ouput
function abc2() {
  console.log(a, b, c);

  const c = 30;
  let b = 20;
  var a = 10;
}
abc2();
//b and c are going tobe hoisted in temporal dead zone

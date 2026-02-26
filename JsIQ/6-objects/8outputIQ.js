//Q3 - Whats the output of the following code ?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a);
console.log(a[b]);
console.log(a[c]);

// explaination
// as b and c already exists in line 4 and 5
// in line 7, when we try to assign b(of line 4) as a key, this happens
// a["[object object]"] = 123;
// {key: "b"} can't be converted into key unless its a string
// so when it tries to convert it into string, line 16 happens
// Similiary, at line 8, key a["object object"] gets updated with 456
//  a["[object object]"] = 456;

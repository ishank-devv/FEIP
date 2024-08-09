//4.RE-Declaration in same scope
//( only "var" can be redecalared in the same scope)

// can re-decalre ******
var f;
var f;

// SyntaxError: Identifier 'b' has already been declared
let g;
// let g;

// SyntaxError: Missing initializer in const declaration
// const h;
// const h;

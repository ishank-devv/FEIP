// q14- Rest operator VS Spread
// params vs arguments

//Rest Operator
// - used as paramter
// - receving multiple values
// - "collecting" both "values in array" called nums
// - Rest paramter must be the "last formal paramter"( file 15)
function multiply(...nums) {
  console.log(nums[0] * nums[1]);
}
var arr = [5, 6];
multiply(...arr);
//Spread Operator
// - used as arguments
// - passing multiple values during function call
// - "spreading" both of "values out of arr" and pass it to the funct as paramaters
// - spread operator can be used anywhere in arguments unlike rest, because its just spreading the values
// (file 17)

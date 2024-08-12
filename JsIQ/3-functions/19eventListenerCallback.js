//pre defined callback eg
//setTimeout, map, filter, reduce

console.log("Start");
//addEeventListener(event, cb)
document.getElementById("btn").addEventListener("click", function () {
  console.log("You clicked the button");
});
console.log("End");

//output
//Start
//End
//----after event ("click") has triggered by the user---
//Callback

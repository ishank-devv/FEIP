//global scope
function subscribe() {
  //inner scope 2
  var name = "The coder";
  function displayName() {
    //inner scope 1
    alert(name);
  }
  displayName();
}
subscribe();

// displayName making closure with subscribe

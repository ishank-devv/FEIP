// q5: How would you use a closure to create a private counter ?
//using functions to manipulate the _counter indirectly

function counter() {
  //convention for private variable
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrive() {
    return "Counter = " + _counter;
  }

  //returning both functions
  return {
    add,
    retrive,
  };
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrive());

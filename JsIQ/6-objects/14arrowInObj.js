//Q8- What's the output ?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.parameter());

//// when you call diameter() function, its gonna reference to shape obj
//// when you call perimeter() function (ie. An Arrow function), its gonna reference to window/global obj
//// because this.radius in does not exist in window

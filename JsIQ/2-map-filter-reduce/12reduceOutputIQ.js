// Ques 4: Sum of marks of all students

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

const totalSum = students.reduce((accumulator, currentEle, index, students) => {
  return accumulator + currentEle.marks;
}, 0);
console.log(totalSum);

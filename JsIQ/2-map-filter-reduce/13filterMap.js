// start solving from end of statement, first use "filter" then "map"
// Ques 5: Return only names of students(map) who scored more than 60(filter)

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

//chaining
const output = students
  .filter((student) => student.marks > 60)
  .map((student) => student.name);
console.log(output);

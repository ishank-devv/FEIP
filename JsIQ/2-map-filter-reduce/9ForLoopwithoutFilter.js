// Ques2: return only details of those who scored more than 60 marks

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

//for loop instead of filter
let details = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].marks > 60) {
    details.push(students[i]);
  }
}
console.log(details);

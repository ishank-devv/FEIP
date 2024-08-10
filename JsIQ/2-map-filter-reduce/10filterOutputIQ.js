// Ques2: return only details of those who scored more than 60 marks

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

const details = students.filter(
  (student) => {
    // option 1
    //   if (student.marks > 60) {
    //     return student;
    //   }

    //option2
    return student.marks > 60;
  }
  //option3
  // (student) => student.marks > 60
);
console.log(details);

//ques3: More than 60 marks and rollNumber greater than 15
const details2 = students.filter(
  (student) => student.marks > 60 && student.rollNumber > 15
);
console.log(details2);

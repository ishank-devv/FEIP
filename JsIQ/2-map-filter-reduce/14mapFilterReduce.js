//start solving from the end, first use "map" for transforming( map transforms) the marks first
// then use "filter" to filter out based on condition, then use "reduce" to find the total sum
// Ques 6: Return total marks for students(reduce) with marks greater than 60 (filter)
//         after 20 marks have been added to those who scored less than 60(map)

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

const output = students
  .map((student) => {
    // 20 marks have been added to those who scored less than 60
    if (student.marks < 60) {
      student.marks = student.marks + 20;
    }
    return student;
  }) //students with marks greater than 60
  .filter((student) => student.marks > 60)
  //total marks for students
  .reduce((accumulator, currentELe, index, students) => {
    return accumulator + currentELe.marks;
  }, 0);
console.log(output);

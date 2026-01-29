const students = [
  { name: "Amina", marks: [78, 82, 91, 66] },
  { name: "Brian", marks: [55, 49, 61, 58] },
  { name: "Cynthia", marks: [88, 90, 84, 92] },
  { name: "David", marks: [40, 35, 52, 47] },
  { name: "Elsa", marks: [70, 73, 68, 75] }
];

  let passCount = 0;

// looping through each student
for (let stdLoop = 0; stdLoop <students.length; stdLoop++){
  // resetting total mark to 0 for each student
  let total =0;

  // making marks available everywhere- now it just exists inside the students list
  let currentMarks = students[stdLoop].marks;

  // getting total marks
  for (let mksLoop = 0; mksLoop < currentMarks.length; mksLoop++){
    total += currentMarks[mksLoop];
  }

  // getting average
  let average = total /students[stdLoop].marks.length;
  // console.log(`${students[stdLoop].name}'s average is ${average}`);

  
}

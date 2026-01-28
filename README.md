Student Marks Analyzer (Mini Gradebook)

Concepts covered: Objects, Arrays, for loops, if statements
Estimated time: 1–2 hours
Rule: Don’t use map, filter, reduce yet. Use for loops.

Starter Data (copy/paste exactly)
const students = [
  { name: "Amina", marks: [78, 82, 91, 66] },
  { name: "Brian", marks: [55, 49, 61, 58] },
  { name: "Cynthia", marks: [88, 90, 84, 92] },
  { name: "David", marks: [40, 35, 52, 47] },
  { name: "Elsa", marks: [70, 73, 68, 75] }
];


Requirements
1) Compute each student’s average
Loop through the students array
For each student, loop through their marks array
Sum the marks, then calculate the average

2) Assign a grade using if statements
Use this grading system:

A if average >= 80
B if average >= 70
C if average >= 60
D if average >= 50
E otherwise


3) Create a new array called report
Each item in report should be an object like this:

{ name: "Amina", average: 79.25, grade: "B", status: "PASS" }


Rules:

status is "PASS" if average >= 60
otherwise status is "FAIL"

---

4) Print a clean class report + summary
Print each student like:

Amina: Avg 79.25 | Grade B | PASS
Brian: Avg 55.75 | Grade D | FAIL
...


Then print a summary:

Total number of students
Number of PASS vs FAIL
Top student (highest average) + average
Lowest student (lowest average) + average


Output Example (rough)
Amina: Avg 79.25 | Grade B | PASS
Brian: Avg 55.75 | Grade D | FAIL
...

Class Summary:
Students: 5
Pass: 3
Fail: 2
Top Student: Cynthia (88.5)
Lowest Student: David (43.5)
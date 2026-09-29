import students, { getStudentInfo } from './students.js';
import { calcAverage } from './grades.js';

const displayDiv = document.getElementById("students-display");

for (let i = 0; i < students.length; i++) {
  const currentStudent = students[i];
  const info = getStudentInfo(currentStudent);
  const avg = calcAverage(currentStudent.grades);
  
  const studentText = info + " , Average: " + avg;
  
  const p = document.createElement("p");
  p.innerText = studentText;
  displayDiv.appendChild(p);
}
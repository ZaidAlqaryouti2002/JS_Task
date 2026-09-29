const students = [
  { name: "Zaid", id: 101, grades: [90, 85, 95] },
  { name: "Omar", id: 102, grades: [80, 75, 88] },
  { name: "Ali", id: 103, grades: [95, 100, 98] }
];

function getStudentInfo(student) {
  return "Name: " + student.name + " , ID: " + student.id;
}

export { getStudentInfo };
export default students;
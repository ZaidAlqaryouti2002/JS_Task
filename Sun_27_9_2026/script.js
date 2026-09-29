/*
              ----------- * 1 * ---------------

console.log(name); // undefined
var name = "Jone";
function test() {
var x = 10;
if (true) {
var y = 20;
}
console.log(y); // 20
}
test();
// console.log(x); / هون رح يعطي ايرور لو شلنا الكومنت لانه مش متعرف عالفاريبل

var gets out the block scope and leaked into the whole function but let respects the block of code

function scope its the scope inside the function but block scope it's a scope inside a certain scope for example the if statement here

Rewrite the code using let:

let name = "Jone";
console.log(name); 

function test() {
  let x = 10;
  
  if (true) {
    let y = 20;
    console.log(y); 
  }
}

test();

*/

/* --------------2----------------*/

function Person (name,age){
   this.name=name;
   this.age=age;
}

Person.prototype.greet= function(){
    console.log("Hello, my name is " + this.name + " and i am " + this.age + " years old.");
}

function Employee(name, age, EmployeeID, position){

    Person.call(this, name, age)
    this.EmployeeID= EmployeeID;
    this.position= position;

}

Employee.prototype= Object.create(Person.prototype);
Employee.prototype.constructor= Employee;

Employee.prototype.greet = function() {
  console.log("Hello, I'm " + this.name + ". I work as a " + this.position + " (ID: " + this.employeeId + ").");
};

var emp1= new Employee ("Zaid", 24, "E1", "Full Stack Web Developer");
var emp2 = new Employee("Rami", 30, "E2", "QA");
var emp3 = new Employee("Ali", 22, "E3", "Team Leader");

emp1.greet();

/* ----------- Exercise 3 --------------*/

const classA = [
  "Zaid", "Omar", "Ahmad", "Bilal", "Yousef", 
  "Hamza", "Tareq", "Mustafa", "Sami", "Hassan", 
  "Hussein", "Mahmoud", "Fadi", "Rami", "Nasser", 
  "Adel", "Karim", "Waleed", "Anas", "Salim", 
  "Majed", "Khaled", "Ali", "Mohammad", "Ibrahim"
];

const classB = [
  "Sara", "Noor", "Laila", "Rana", "Huda", 
  "Mona", "Aya", "Fatima", "Zainab", "Dina", 
  "Reem", "Salma", "Yasmin", "Hala", "Nisreen", 
  "Ruba", "Lubna", "Dana", "Maya", "Tala", 
  "Lina", "Ghada", "Sahar", "Samira", "Jumana"
];

let concStu= classA[0].concat(classB[1]);
console.log(concStu);

let sortStuA= classA.sort();
let sortStuB= classB.sort();

console.log("Sorted Class A: "+ sortStuA);
console.log("Sorted Class B: "+ sortStuB);

let reverseStuA= classA.reverse();
let reverseStuB= classB.reverse();

console.log("Reversed Class A: "+ reverseStuA);
console.log("Reversed Class B: "+ reverseStuB);

let includeStuA = classA.includes("Zaid");
let includeStuB= classB.includes("Ali");

console.log("Is Zaid Included in class a? "+ includeStuA);
console.log("Is Ali Included in class b? "+ includeStuB);

let fullArray = classA.concat(classB);

fullArray.forEach(function(student,index){
    console.log("student number: "+ (index+1) + " "+ student);
})

const students = [];

for (let i = 1; i <= 50; i++) {
  students.push({
    id: i,
    name: `Student ${i}`,
    grade: Math.floor(Math.random() * 50) + 50
  });
}

students.splice(0,1);
students.splice(2, 0, { id: 99, name: "Zaid", grade: 95 });

const firstFive= students.slice(0,5);

const SortedStudents= students.sort(function(a,b){
    return a.grade - b.grade;
});

console.log("Sorted Marks: ", SortedStudents);

SortedStudents.forEach(function(student, index){

    console.log(`${index}+1. ID ${student.id} Name: ${student.name} Grade: ${student.grade}`);
    
})

/* Exercise 5 */

const product = {id: 2, name: "ps5_console", price: 500, category: "gaming", available: true};

const jsonProduct= JSON.stringify(product);
console.log(jsonProduct);

const parsedJSON= JSON.parse(jsonProduct);
console.log(parsedJSON);

const corruptedJSON = '{"id": 2, "name": "ps5_console", "price": }';

try{
  const badResult = JSON.parse(corruptedJSON);
  console.log(badResult);

} catch (error){
  console.log("Invalid JSON Error");
  console.log("unexpected error ", error.message);
  
}

/* Exercise 7 */
const square = num => num * num;
const isEven = num => num % 2 === 0;

const calculateTotalPrice = products => products.reduce((total, item) => total + item.price, 0);

const numbers = [1, 2, 3, 4, 5, 6];

const squaredNumbers = numbers.map(square);
console.log("Squared Numbers:", squaredNumbers);

const evenNumbers = numbers.filter(isEven);
console.log("Even Numbers:", evenNumbers);

const products = [
  { name: "Controller", price: 60 },
  { name: "Headset", price: 40 },
  { name: "Game", price: 70 }
];

const totalPrice = calculateTotalPrice(products);
console.log("Total Price:", totalPrice);

/* Exercise 8 */
const userProfile = {
  name: "Zaid",
  email: "zaid@myemail.com",
  age: 24,
  address: "Amman, Jordan"
};

const{name, email, age}= userProfile;

console.log(name);
console.log(email);
console.log(age);

const{address: myAddress}= userProfile;
console.log(myAddress);

const skills= ["Gaming", "Programming", "Team Work"];
const [firstSkill, secondSkill, thirdSkill]= skills;

console.log(firstSkill);
console.log(secondSkill);
console.log(thirdSkill);

function createUser(name= "ZaidAlabed", email= "zaid@myemail.com", age= 25){
  return "Hello, your name is "+ name+ " , your age is "+ age+ " , and your email is : "+ email;
} 

console.log(createUser());

console.log(createUser("Ali", "ali@email.com"));


/* Exercise 9 */

const group1 =["Zaid", "Ali", "Mohammed"];
const group2 =["Omar", "Ahmad", "Sara"];

const allEnrolled= [...group1, ...group2];

console.log(allEnrolled);

function calcAverage(...grades){
  const sum= grades.reduce((total,grade ) => total +grade,0);

  const average = sum/grades.length;

  return average;
}

console.log("Total Average: "+ calcAverage(86,98,76,45));
console.log("Total Average: "+ calcAverage(67, 86, 97));

const studentIds = [101, 102, 101, 103, 102, 104];
const uniqueIdSet = new Set(studentIds);
const uniqueIdArray= [...uniqueIdSet];

console.log("Unique Id's Are: ", uniqueIdArray);


const studentsGrades = new Map();
studentsGrades.set(101, 98);
studentsGrades.set(102, 76);

console.log(studentsGrades.get(101));

const deletedStudent= studentsGrades.delete(102);

const updatedStudent= studentsGrades.set(101, 100);

console.log("updated student: ", updatedStudent);

const studentGradesArray = [...studentsGrades];

console.log("New Map Array : ", studentGradesArray);








/* Exercise 10 */

const studentsArr = [
  { id: 123, name: "Ali", age: 25, grade: 65 },
  { id: 122, name: "Zaid", age: 24, grade: 70 },
  { id: 124, name: "Ahmad", age: 22, grade: 45 },
  { id: 125, name: "Sara", age: 23, grade: 88 },
  { id: 126, name: "Omar", age: 21, grade: 49 }
];

const container =document.getElementById("reports-container");

let htmlReports= "";

for (const student of studentsArr){

  htmlReports+= `<div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 6px;">
      <h3>Name: ${student.name}</h3>
      <p>ID: ${student.id}</p>
      <p>Grade: ${student.grade}</p>
      <p>Status: ${student.grade >= 50 ? "Pass" : "Fail"}</p>
    </div>`

}

container.innerHTML =htmlReports;

/* Exercise 11 */

class Person {

  constructor(name, email){
    this.name=name;
    this.email=email;
  }

  getInfo(){
    return "The name is : "+this.name+ " The Email is : "+ this.email;
  }
}

class Student extends Person{
  constructor(name, email, studentID){
    super(name, email);

    this.studentID=studentID;
  }
}

class Instructor extends Person {
  constructor(name, email, department) {
    super(name, email);
    this.department = department;
  }

  getInfo() {
    return "The name is : " + this.name + " The Email is : " + this.email + " The Department is : " + this.department;
  }
}

const person1 = new Person("Omar", "omar@email.com");
const student1 = new Student("Zaid", "zaid@email.com", 101);
const instructor1 = new Instructor("Ahmad", "ahmad@email.com", "CS");

console.log(person1.getInfo());
console.log(student1.getInfo());
console.log(instructor1.getInfo());
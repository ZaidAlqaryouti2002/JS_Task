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


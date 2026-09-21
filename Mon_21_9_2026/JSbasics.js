/* Data Types And Operators */

let cash=1000;
let current_liabilities= 500;
let cashflow= cash/current_liabilities;
console.log("cashflow= "+ cashflow);
/* */
let revenues=1000;
let expenses= 500;
let netIncome= revenues-expenses;
console.log("net income= "+netIncome);
/* */

let liabilities=1000;
let equity= 500;
let Assets= revenues-expenses;
console.log("Assets= "+Assets);
/* */


let profit_margin= 1000;
let sales= 500;
let net_income= sales*(profit_margin/100);
console.log("Net Income= "+netIncome);
/* */

let num1= 7;
let num2= 9;
let num3= 2;
let average= (num1+num2+num3)/3;
console.log("Average= "+ average);
/* */

let price= 150;
let discountPercent= 30;
let discountamm= (price*30)/100;
let finalprice= price-discountamm;
console.log("Final Price= "+ finalprice);
/* */

let age = 20;
let agelimit = age > 18 && age < 30;
console.log("Age limit= " + agelimit);
/* */

let base = 2;
let exponent = 3;
let powerResult = base ** exponent; 
console.log("Exponential= " + powerResult);
/* */

let dividend = 10;
let divisor = 4;
let remainder = dividend % divisor;
console.log("Remainder= " + remainder);
/* */


/* Strings */

let wto= "Welcome to Orange";
let wto2= wto.slice(8,10)
let wto3= "Hello from ".replace("Welcome to");
let wtoqoute= wto.replace("Orange", '"Orange"');
let wtojordan = wto + " Jordan"
console.log("Upper Case: " + wto.toUpperCase());
console.log("Sliced TO: "+ wto2.toUpperCase());
console.log("Replace: "+ wto3 + wto.slice(11,17));
console.log(wto.toLowerCase());
console.log(wto.length);
console.log(wtoqoute);
console.log(wtojordan);

/* Arrays */
let Array = ["Coding", "Academy", "By", "Orange"]
Array+1;
Array[4]= "Jordan"; 

let ca= Array.slice(0,2);
console.log(Array);
console.log(ca);
let Array2= ["Coding", "Academy", "By", "Orange"]
Array2.unshift("Welcome", "To");
console.log(Array2);
let Array3= ["Coding", "Academy", "By", "Orange"]
Array3.shift(Array3);
console.log(Array3);
let words= Array[0] +" "+Array[1]+ " "+ Array[2]+" "+ Array[3];
console.log(words);
console.log(Array.slice(0,4));
Array.splice(1,2);
Array.pop();
console.log(Array);

/* Arrays 2 */
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log(vegetables);
fruit.shift();
console.log(fruit);
console.log(fruit[1]);

var orangeIndex = fruit.indexOf("orange");
fruit.push(orangeIndex);
console.log(fruit);

var veglength = vegetables.length;
console.log(veglength);

vegetables.push(veglength);
console.log(vegetables);

var conc = fruit.concat(vegetables);
console.log(conc);

conc.splice(4, 2);
console.log(conc);

conc.reverse();
console.log(conc);

var newString = conc.toString();
console.log(newString);


/* Conditionals */
let birthyear=2002;
let currentyear= new Date().getFullYear();
let age1= currentyear-birthyear;
if(age1>30){
    console.log("You are not eligble. You may join other programs");
    
}
else if(age1>=18 && age1<=30){
    console.log("You are eligible. Start your application");
    
}
else if(age<18){
    console.log("You may join kids program");
}
else if(age>60){
    console.log("You may join senior program");
    
}

/* Functions */
/* to lower case or to upper case function */
function switchWords(word){
    let result = "";

    for (let char of word) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

console.log(switchWords("OrAnGE"));

/* to camel case function */
function camelCase(text){
    let words = text.split(" ");
    let theResult = "";

    for (let i = 0; i< words.length; i++){
        let currentWord = words[i];

        let firstLetter = currentWord[0].toUpperCase();
        
        let restOfWord = currentWord.slice(1);

        theResult += firstLetter + restOfWord;

    }
    return theResult;
}

console.log(camelCase("Coding Academy by Orange"));

/* Specific Element Deletion From Array */

function removeElement(array, target){

    let ind= array.indexOf(target);

    if (ind !== -1){
        array.splice(ind,1);
    }

    return array;
}

console.log(removeElement(["Coding", "Academy", "By", "Orange"], "By"));


function checkOddEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkOddEven(10)); 
console.log(checkOddEven(7));


function isNum(value){
    if (typeof value === "number"){
        return true;
    } else{
        return false;
    }
}

console.log(isNum(10));
console.log(isNum("Zaid"));


function checkLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(checkLargest(10, 20));



function checkTriangle(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } 
    else if (a === b || a === c || b === c) {
        return "Isosceles";
    } 
    else {
        return "Scalene";
    }
}
console.log(checkTriangle(5, 5, 5));




function inRange(number, min, max) {
    if (number >= min && number <= max) {
        return true;
    } else {
        return false;
    }
}
console.log(inRange(5, 1, 10)); 



function isLeapYear(year) {
    if (year % 4 === 0) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}
console.log(isLeapYear(2026));

/* Loops */


for (let i =2; i<=50; i+=2){
   console.log(i);
}

let j = 2;
while (j <= 50) {
  console.log(j);
  j += 2; 
}

for (let k =2; k<=50; k+=2){
   console.log("Even = "+k);
}

let l =1;
while(l<=50){
    console.log("Odd = "+l);
    l+=2;
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


function fizzBuzzRecursive(start, end) {
    if (start > end) return;

    if (start % 3 === 0 && start % 5 === 0) {
        console.log("FizzBuzz");
    } else if (start % 3 === 0) {
        console.log("Fizz");
    } else if (start % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(start);
    }

    fizzBuzzRecursive(start + 1, end);
}
fizzBuzzRecursive(1, 100);

// 7
function convertToBanknotes(amount, notes) {
    let result = [];
    for (let i = 0; i < notes.length; i++) {
        while (amount >= notes[i]) {
            result.push(notes[i]);
            amount -= notes[i];
        }
    }
    return result.join(", ");
}
console.log(convertToBanknotes(57, [25, 10, 5, 1]));

// 8
function countChar(str, char) {
    let count = 0;
    let lowerStr = str.toLowerCase();
    let lowerChar = char.toLowerCase();
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerChar) count++;
    }
    return count;
}
console.log(countChar("Coding Academy by Orange", "o"));

// 9
for (let i = 0; i <= 20; i++) {
    console.log(i);
}
for (let i = 3; i <= 29; i += 2) {
    console.log(i);
}
for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

let str = 'CodingAcademy';
let arr = [7, 500, 'KH404', 'black', 36];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}

let nums = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [];
let odds = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        evens.push(nums[i]);
    } else {
        odds.push(nums[i]);
    }
}
console.log("Evens:", evens);
console.log("Odds:", odds);

function generateMeals(numMeals) {
    let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
    let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
    let vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
    let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
    let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

    let mealsSet = new Set();
    let result = [];

    while (mealsSet.size < numMeals) {
        let p = proteins[Math.floor(Math.random() * proteins.length)];
        let g = grains[Math.floor(Math.random() * grains.length)];
        let v = vegetables[Math.floor(Math.random() * vegetables.length)];
        let b = beverages[Math.floor(Math.random() * beverages.length)];
        let d = desserts[Math.floor(Math.random() * desserts.length)];

        let mealString = `${p}, ${g}, ${v}, ${b}, ${d}`;
        
        if (!mealsSet.has(mealString)) {
            mealsSet.add(mealString);
            result.push([p, g, v, b, d]);
        }
    }
    return result;
}
console.log(generateMeals(5));

/* Objects */
function getProperties(obj) {
    return Object.keys(obj);
}

function countProperties(obj) {
    let propertiesArray = Object.keys(obj);
    return propertiesArray.length;
}

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

function convertValuesToUpperCase(obj) {
    let newObj = {}; 
    
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            newObj[key] = obj[key].toUpperCase();
        } else {
           
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

function getNonNullProperties(obj) {
    let newObj = {};
    
    for (let key in obj) {
        if (obj[key] !== null) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

function sortProperties(obj) {
    let propertiesArray = Object.keys(obj);
    return propertiesArray.sort();
}





















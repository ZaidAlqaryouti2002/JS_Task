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














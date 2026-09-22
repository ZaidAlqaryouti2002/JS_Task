/* Basic */

let age=27;
if(age>18){
    console.log("You are an adult");    
}

let num=4;
if(num%2==0){
    console.log("The number is even");
    
}

/* Mid */

let char = "a"
if (char.toLowerCase() != char.toUpperCase()){
    console.log("It's A letter");
    
}
else{
    console.log("it's not a letter");
}

let list= [1,2,3];
if(Array.isArray()){
    console.log("it's an array");    
}

let x= 5;
if(x>0){
    console.log(x+ "is a positive number");
}

/* Advanced */

let z= 9;
if(z%3==0){
    console.log(z+" is multiple of 3");
}

let password= "mypassword123";
if(password.length >=8)
    console.log("Your Password Is Strong");
else
    console.log("Your Password Is Weak");

let age1= 30;
if(age1>=18 && age1<=65){
    console.log("You Are of working age");
}

let color= "red";
switch(color){
    case "green":
    case "blue":
    case "red":
        console.log(color +" color is primary color");
}

function isNumber(variable) {
    if (!isNaN(variable) && typeof variable === "number") {
        return true;
    } else {
        return false;
    }
}

console.log(isNumber(12));       
console.log(isNumber("Orange")); 
    
    

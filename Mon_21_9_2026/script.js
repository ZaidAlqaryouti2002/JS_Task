/*var x =10
console.log(x);*/

// console.log(y);

/*
function test_fun(x){
    var z=3;

    console.log(z);
}
*/

let y=10;
z=5;
console.log("y=" ,y);
console.log("z=",z);

let name= "Orange Coding Academy";
let number= 1;
let boolean= true;
//let true= 1// error
let double = 2.11;
let null_val = null;
let unde_val= undefined;
let obj_val = {name: "John", age: 25};
let arr_val= [1,2,3,4,5];

console.log("data type of name", typeof(name));
console.log("data type of name", typeof(number));
console.log("data type of name", typeof(boolean));
console.log("data type of name", typeof(double));
console.log("data type of name", typeof(null_val));
console.log("data type of name", typeof(arr_val));



/****** Operation *******/ 
let a=15;
let b=20;

let sum = a+b;
console.log("sum= a+b ",sum);


let c=2;
let d=10;

let great_ope= c > d;
console.log("and_ope= "+ great_ope);


 let less_ope= c<d;
 console.log("less_ope", less_ope);
 
 if(c>d){
    console.log(c);
 }
  else{
    console.log(d);
    
  } 

  let day= "sunday";
  switch (day){
        case "sunday":
        console.log("this is our day");
        break;

        case "Tuesday":
        console.log("this is not our day");
        break;

        case "Wednsday":
        console.log("this is not our day");
        break;
        
  }

  // string method

  let string_val = "orange academy";
  console.log("string val= ",string_val.toUpperCase());
  
  let low_val = "ORANGE ACADEMY";
  console.log("low val= ", low_val.toLowerCase());





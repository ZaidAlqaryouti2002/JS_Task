/* 1 */

const person= {name: "Adam", age: 25, gender: "male"};

console.log(person.name, person.age, person.gender);

/* 2 */

const person1= {name: "Adam", age: 25};
person1.gender= "Male";

console.log(person1.name, person1.age, person1.gender);

/* 3 */
console.log(person1.name);


/* JS Array */

/* 1 */

let arr= [1,2,3,4,5];
arr.forEach(item => console.log(item));

/* 2 */

let fruits= ["apple", "cherry", "banana"];
console.log("Sorted Fruits: "+ fruits.sort());

/* 3 */

let fruits2= ["apple", "banana", "cherry"]
console.log("Reversed Items: "+ fruits2.reverse());

/* 4 */
let arr1= [1,2,3];
let arr2= [4,5,6];

console.log("Combined Arrays : "+ arr1.concat(arr2));

/* 5 */
let arr3= [1,2,3,4,5,6];
let slicedArr= arr3.slice()


/* 6 */
function extractPortion(arr, start, end) {
    return arr.slice(0, start).concat(arr.slice(end));
}

let input = [1, 2, 3, 4, 5, 6];
let result = extractPortion(input, 2, 4);

console.log(result); 

/* 7 */
let arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(2, 1);
console.log("After Splice: ", arrSplice);

/* 8 */
let arrIndex = [1, 2, 3, 4, 5];
console.log(arrIndex.indexOf(3));

/* 9 */
let arrJoin = [1, 2, 3, 4, 5];
console.log(arrJoin.join(","));

/* 10 */
let strSplit = "1,2,3,4,5";
console.log(strSplit.split(","));

/* 11 */
let arrLength = [1, 2, 3, 4, 5];
console.log(arrLength.length);

/* 12 */
let arrForOf = [1, 2, 3, 4, 5];
for (let num of arrForOf) {
    console.log(num);
}

/* 13 */
let arrCheck = [1, 2, 3, 4, 5];
console.log(Array.isArray(arrCheck));
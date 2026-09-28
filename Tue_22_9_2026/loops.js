/* 1 */

let i =1;
while(i<=10){
    console.log(i);


    i++
}

console.log("**********2*********");

/* 2 */

let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

/* 3 */
console.log("*********3*********");

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
/* 4 */

console.log("*********4*********");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

/* 5 */
console.log("*********5*********");

let arr = [1, 2, 3, 4, 5];
let max = arr[0]; 

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max); 

/* 6 */
console.log("*********6*********");

let arr1 = [1, 2, 3, 4, 5];
let sum1 = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let average = sum/arr.length;

console.log(average); 

/* 7 */
console.log("*********7*********");

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(factorial); 

/* 8 */
console.log("*********8*********");


let limit = 10;
let a = 0;
let b = 1;

while (a <= limit) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}

let limit1 = 20;

for (let i = 2; i <= limit; i++) {
    let isPrime = true;

    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}

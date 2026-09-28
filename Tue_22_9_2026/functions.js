/* 1 */

function findSmallest(num1,num2,num3,num4){
  let smallest = num1;
  if(num2<smallest){
    smallest=num2;
  }
  if(num3<smallest){
    smallest=num3;
  }
  if(num4<smallest){
    smallest=num4;
  }

  return smallest;
}

let num1=10;
let num2= 7;
let num3= 2;
let num4= 4;

let smallestNum= findSmallest(num1,num2,num3,num4);

console.log("The smallest number is : "+ smallestNum);

/* 2 */
let str= "hello";
function alphaOrder(str){
  return str.split('').sort().join('');
}

let reversed = alphaOrder(str);
console.log("The word reserved: "+ reversed);


/* 3 */
function factorial (n){
  let result= 1;
  for(let i = 1; i<n; i++){
    result*= i
  }
  return result;
}

let factorialVal= factorial(5);

/* 4 */

function EvenOdd(n){
  if (n%2 == 0)
    return n+ " Is Even Number";
  else
    return n+ " Is Odd Number";
}

let isEvenOdd = EvenOdd(3);
console.log(isEvenOdd);

/* 5 */

function SumBack(num){
  let sum=0;
  for(let i =1; i<=num; i++){
    sum +=i;
  }

  return sum;
}

let sumbackVal= SumBack(5);
console.log(sumbackVal);

/* 6 */

function minMaxLengthAverage(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
        sum += arr[i];
    }

    let average = sum / length;

    return [min, max, length, average];
}

let ArrayAverage = minMaxLengthAverage([7, 13, 3, 77, 100]);

console.log(ArrayAverage);
let amount = '100';

//Ways to parse a String to a Number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

let amount1 = 100;
//Ways to change a Number to a String
// amount = amount.toString()
// amount1 = String(amount1);

console.log(amount1, typeof amount1);

let x;

x = 1;
x += 1;
x = 5 * '5'
console.log(x, typeof x);

let s = 'Hello World'

console.log(s[6], typeof s)

const myString = 'developer';
const firstLetter = myString[0].toUpperCase();
const newString = firstLetter + myString.substring(1)
console.log(newString)

const a = Number('2');

console.log(a.valueOf() , typeof a)

let n; 

n = Math.pow(2,3)

n = 2**3;
n **= 2
console.log(n);

const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 50 + 1);


console.log(`${b} + ${c} = ${b+c}`);

console.log(Math.floor(Date.now() / 1000 / 60 / 60 /24/365))

const arr = [1,2,3,4,5];
const arr1 = [5,6,7,8,9,10];

const concatenated = arr.slice(0,4).concat(arr1)
console.log(concatenated)
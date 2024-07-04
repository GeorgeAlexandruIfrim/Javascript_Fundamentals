/*
Primitive :
String
Number
Boolean
Null
Undefined
Symbol
BigInt

Reference:
Objects literals
arrays
functions
*/

const firstName = 'Sara';

const lasName = firstName;

const numbers = [1,2,3,4];

const person = {
    name: "George",
};

person.age = 42;

function sayHello(){
    console.log("Hello World")
}
const output = sayHello;

console.log(output, typeof output);



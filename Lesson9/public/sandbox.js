"use strict";
// Function Signatures
//let greet: Function:
//example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// asign and call
greet('Kasu', 'Hello');
greet('kavi', 'Gd morning');
//example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//asign and call
let sum = calc(10, 5, 'add');
let diff = calc(10, 5, 'subtract');
console.log(sum, diff);
//example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
//asign and call
let p1 = { name: 'Ravi', age: 25 };
logDetails(p1);
let p2 = { name: 'Shaki', age: 30 };
logDetails(p2);

"use strict";
let greet;
greet = () => {
    console.log('hello,again');
    console.log(greet);
};
greet();
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(10, 20, 30);
const minus = (a, b) => {
    return a + b;
};
let result = minus(12, 8);
console.log(result);

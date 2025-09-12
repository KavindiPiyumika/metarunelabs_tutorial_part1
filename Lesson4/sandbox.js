//explicit types
var character;
var age;
var isloggedIn;
age = 50;
character = 'kavi';
isloggedIn = true;
//arrays
var ninja = [];
ninja.push('kavi', 'shaki', 'sali');
console.log(ninja[1]);
//union types
var mixed = [];
mixed.push('hello');
mixed.push(50);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123hello';
uid = 123;
console.log(uid);
//objects
var ninjaone;
ninjaone = { name: 'lasi', age: 20 };
var ninjatwo;
ninjatwo = {
    name: 'mashi',
    age: 35,
    beltcolor: 'black'
};
console.log(ninjaone);
console.log(ninjatwo);

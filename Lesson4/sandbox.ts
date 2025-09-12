//explicit types
let character : string;
let age: number;
let isloggedIn: boolean;
 
age=50;
character='kavi';
isloggedIn=true;

//arrays
let ninja: string[]=[];

ninja.push('kavi','shaki','sali');
console.log(ninja[1]);

//union types
let mixed: (string|number|boolean)[]=[];
mixed.push('hello');
mixed.push(50);
mixed.push(false);
console.log(mixed);


let uid: string|number;
uid= '123hello';
uid= 123;
console.log(uid);

//objects
let ninjaone:object;
ninjaone ={name:'lasi', age:20};

let ninjatwo:{
    name: string,
    age: number,
    beltcolor: string
};

ninjatwo = {
    name:'mashi' ,
    age:35,
    beltcolor: 'black'
};
console.log(ninjaone);
console.log(ninjatwo);



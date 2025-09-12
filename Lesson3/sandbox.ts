//arrays
let names = ['luigi','mario','yoshi'];
names.push('lard');

let numbers = [10,20,30];
numbers.push(40);

let mixed = ['kavi' , 60 ,'sali',9];
mixed.push('shaki');
mixed.push(50);
mixed[0]= 5;

console.log(names);
console.log(numbers);
console.log(mixed);
console.log(mixed[0]);

//object

let ninja = {
    name:'mario',
    belt:'black',
    age:30,
    skills:['fighting','swimming']
};
ninja.age;
ninja.name='riu';

ninja = {
    name: 'yashi',
    belt: 'orange',
    age: 40,
    skills:['playing','fighting','swimming']

};
 
console.log(ninja);
console.log(ninja.age);
console.log(ninja.name);
console.log(ninja.skills[0]);



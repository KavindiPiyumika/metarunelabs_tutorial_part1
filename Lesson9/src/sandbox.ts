// Function Signatures

//let greet: Function:

//example 1

let greet: (a:string , b:string) => void;
greet = (name: string , greeting: string)=> {
    console.log(`${name} says ${greeting}`);  
}
// asign and call
greet ('Kasu' , 'Hello');
greet ('kavi' , 'Gd morning');



 //example 2

 let calc: (a: number , b: number , c:string) => number;
 calc = (numOne: number , numTwo: number , action: string) => {
    if (action === 'add'){
        return numOne + numTwo;
    }else{
        return numOne - numTwo;
    }
 }
 //asign and call
 let sum = calc(10 ,5,'add');
 let diff = calc(10,5,'subtract');
 console.log(sum,diff);



 //example 3

 let logDetails:(obj:{name: string, age: number}) => void ;

        //create alises
 type person = {name:string , age:number};
 
 logDetails = (ninja: person) => {
console.log(`${ninja.name} is ${ninja.age} years old`);
 }

 //asign and call
 let p1:person = {name:'Ravi' , age:25};
 logDetails(p1);

 let p2:person = {name: 'Shaki' , age:30};
 logDetails(p2);

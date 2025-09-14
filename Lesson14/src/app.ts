
//Interfaces

interface IsPerson{
    name:string;
    age:number;
    speak(a:string):void;
    spend(a:number): number;
}

const me: IsPerson = {
    name: 'shan',
    age: 30,
    speak(text:string):void{
        console.log(text);
    },
    spend(amount:number):number{
        console.log('I spend', amount);
        return amount;
    }

};


const greetPerson = (person:IsPerson) => {
    console.log('hello',person.name);
}

greetPerson(me);

console.log(me);



import {Invoice} from './classes/invoice.js'


//asign and call object
const inv1 = new Invoice('mario' , 'work on the mario website' , 200);
const inv2 = new  Invoice('Shaki' , 'work on the luigi website' , 300);


//array
let invoices:Invoice[] =[];
invoices.push(inv1);
invoices.push(inv2);

invoices.forEach(inv =>{
    console.log(inv.client ,inv.amount , inv.format());
});




const form = document.querySelector('.new-item-form') as HTMLFormElement;  //type casting
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener ('submit',(e:Event) =>{
e.preventDefault();

console.log(
    type.value,
    toform.value,
    details.value,
    amount.value
);

})
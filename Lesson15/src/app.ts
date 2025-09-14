
import { Invoice } from "./classes/invoice";
import { payment } from "./classes/payment";
import { Hasformatter } from "./interfaces/Hasformatter.js";

//let docOne: Hasformatter;
//let docTwo: Hasformatter;

//docOne = new Invoice('yoshi','web work',250);
//docTwo = new payment('mario','plumbing work',200);

//let docs: Hasformatter[]=[];
//docs.push(docOne);
//docs.push(docTwo);

//console.log(docs);


//asign and call object
//const inv1 = new Invoice('mario' , 'work on the mario website' , 200);
//const inv2 = new  Invoice('Shaki' , 'work on the luigi website' , 300);


//array
//let invoices:Invoice[] =[];
//invoices.push(inv1);
//invoices.push(inv2);

//invoices.forEach(inv =>{
//    console.log(inv.client ,inv.amount , inv.format());
//});




const form = document.querySelector('.new-item-form') as HTMLFormElement;  //type casting
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener ('submit',(e:Event) =>{
e.preventDefault();

let doc: Hasformatter;
if (type.value ==='invoice'){
    doc = new Invoice(toform.value,details.value,amount.valueAsNumber)
}else {
    doc = new payment(toform.value,details.value,amount.valueAsNumber)
}

console.log(doc);

});
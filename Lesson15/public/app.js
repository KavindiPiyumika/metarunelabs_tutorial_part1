import { Invoice } from "./classes/invoice";
import { payment } from "./classes/payment";
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
var form = document.querySelector('.new-item-form'); //type casting
console.log(form.children);
var type = document.querySelector('#type');
var toform = document.querySelector('#toform');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment(toform.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});

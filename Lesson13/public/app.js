import { Invoice } from './classes/invoice.js';
//asign and call object
var inv1 = new Invoice('mario', 'work on the mario website', 200);
var inv2 = new Invoice('Shaki', 'work on the luigi website', 300);
//array
var invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
var form = document.querySelector('.new-item-form'); //type casting
console.log(form.children);
var type = document.querySelector('#type');
var toform = document.querySelector('#toform');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.value);
});

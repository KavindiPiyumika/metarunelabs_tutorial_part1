"use strict";
//create class
class Invoice {
    // call constructor
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //create method
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
//asign and call object
const inv1 = new Invoice('mario', 'work on the mario website', 200);
const inv2 = new Invoice('Shaki', 'work on the luigi website', 300);
console.log(inv1, inv2);
//array
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
//change property
inv1.client = 'Yashi';
inv2.amount = 500;
console.log(invoices);
const form = document.querySelector('.new-item-form'); //type casting
console.log(form.children);
const type = document.querySelector('#type');
const toform = document.querySelector('#toform');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.value);
});

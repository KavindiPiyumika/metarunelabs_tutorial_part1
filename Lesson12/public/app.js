"use strict";
// access modifies
//create class
class Invoice {
    //  readonly client: string;
    //  private details: string;
    // public amount: number;
    // call constructor
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //create method
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
//asign and call object
const inv1 = new Invoice('mario', 'work on the mario website', 200);
const inv2 = new Invoice('Shaki', 'work on the luigi website', 300);
//array
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
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

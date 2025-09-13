"use strict";
//DOM and Type casting
const anchor = document.querySelector('a');
//null check
//if anchor {
//  console.log(anchor.href)
//}
console.log(anchor.href);
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

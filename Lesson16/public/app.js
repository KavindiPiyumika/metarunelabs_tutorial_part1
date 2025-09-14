import { Invoice } from "./classes/invoice";
import { payment } from "./classes/payment";
import { ListTemplate } from "./classes/ListTemplate.js";
var form = document.querySelector('.new-item-form'); //type casting
var type = document.querySelector('#type');
var toform = document.querySelector('#toform');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment(toform.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});

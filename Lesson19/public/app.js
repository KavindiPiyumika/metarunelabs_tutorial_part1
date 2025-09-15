var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    var values;
    values = [toform.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value === 'invoice') {
        doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values, false)))();
    }
    else {
        doc = new (payment.bind.apply(payment, __spreadArray([void 0], values, false)))();
    }
    list.render(doc, type.value, 'end');
});
//tuples
var arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [39, false, 'yoshi'];
var tup = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
var student;
student = ['chun-li', 25846];

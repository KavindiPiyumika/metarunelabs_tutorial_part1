
import { Invoice } from "./classes/invoice";
import { payment } from "./classes/payment";
import { Hasformatter } from "./interfaces/Hasformatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";


const form = document.querySelector('.new-item-form') as HTMLFormElement;  //type casting

const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener ('submit',(e:Event) =>{
e.preventDefault();

let doc: Hasformatter;
if (type.value ==='invoice'){
    doc = new Invoice(toform.value,details.value,amount.valueAsNumber)
}else {
    doc = new payment(toform.value,details.value,amount.valueAsNumber)
}

list.render(doc,type.value,'end')

});
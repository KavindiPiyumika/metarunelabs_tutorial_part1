
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

let values:[string,string,number];
values=[toform.value,details.value,amount.valueAsNumber]

let doc: Hasformatter;
if (type.value ==='invoice'){
    doc = new Invoice(...values);
}else {
    doc = new payment(...values);
}

list.render(doc,type.value,'end');

} );


//tuples

let arr = ['ryu',25,true];
arr[0]=false;
arr[1]='yoshi';
arr=[39,false,'yoshi'];

let tup :[string,number,boolean] = ['ryu',25,true];
tup[0]='ken';
tup[1]= 30;

let student:[string,number];
student = ['chun-li',25846];

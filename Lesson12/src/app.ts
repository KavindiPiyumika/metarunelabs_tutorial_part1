// access modifies

//create class

class Invoice{
//  readonly client: string;
//  private details: string;
// public amount: number;

// call constructor
constructor(
    readonly client: string,
    private details: string,
    public amount: number, )
{}

//create method
format(){
return`${this.client} owes ${this.amount} for ${this.details}`;
}

}

//asign and call object
const inv1 = new Invoice('mario' , 'work on the mario website' , 200);
const inv2 = new  Invoice('Shaki' , 'work on the luigi website' , 300);


//array
let invoices:Invoice[] =[];
invoices.push(inv1);
invoices.push(inv2);

invoices.forEach(inv =>{
    console.log(inv.client ,inv.amount , inv.format());
});




const form = document.querySelector('.new-item-form') as HTMLFormElement;  //type casting
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener ('submit',(e:Event) =>{
e.preventDefault();

console.log(
    type.value,
    toform.value,
    details.value,
    amount.value
);

})
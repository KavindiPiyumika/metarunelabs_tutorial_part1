//DOM and Type casting

const anchor = document.querySelector('a')!;

//null check

//if anchor {
//  console.log(anchor.href)
//}
console.log(anchor.href);

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
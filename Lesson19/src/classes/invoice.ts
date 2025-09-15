import {Hasformatter} from '../interfaces/Hasformatter.js';


//classes
export class Invoice implements Hasformatter{
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
 
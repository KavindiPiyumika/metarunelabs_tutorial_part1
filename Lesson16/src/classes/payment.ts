import {Hasformatter} from '../interfaces/Hasformatter.js';


//classes
export class payment implements Hasformatter{
constructor(
    readonly recipient: string,
    private details: string,
    public amount: number, )
{}

//create method
format(){
return`${this.recipient} owes ${this.amount} for ${this.details}`;
}

}
 
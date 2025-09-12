type StringorNum = string|number;
type objWithName = { name: string , uid: StringorNum};


const logDetails = (uid: StringorNum , item: string)=> {
    console.log(`${item} has a uid of ${uid}`);
}
const uid:StringorNum = 100;
const item = 'Book';
logDetails(uid , item);

const greet = (user:objWithName) => {
    console.log(`${user.name} says hello`);
}
const user1:objWithName = {name:'Imesh', uid:1250};
greet(user1);


const greetAgain = (user:objWithName) => {
    console.log(`${user.name} says hello`);
}
const user2:objWithName = {name:'kasun' , uid:2558};
greetAgain(user2);
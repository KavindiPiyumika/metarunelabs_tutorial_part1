"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const uid = 100;
const item = 'Book';
logDetails(uid, item);
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
const user1 = { name: 'Imesh', uid: 1250 };
greet(user1);
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
const user2 = { name: 'kasun', uid: 2558 };
greetAgain(user2);

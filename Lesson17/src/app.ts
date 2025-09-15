//Generics

const addUID =<T extends {name:string}> (obj:T) => {
let uid = Math.floor(Math.random()*100);
return{...obj,uid};
}

let docOne = addUID({name:'yoshi' , age:40});
console.log(docOne);

//with interfaces
interface Resource <T>{
    uid: number;
    resourceName:string;
    data: T;
}

const docThree:Resource <string>= {
    uid:2,
    resourceName:'shan',
    data:'kavi'
}

const docFour:Resource<string[] > = {
    uid:5,
    resourceName:'Ama',
    data:['milk','onion','leaves']
}

const docFive:Resource<object> = {
    uid:10,
    resourceName:'Sasa',
    data:{name:'Dil'}
}


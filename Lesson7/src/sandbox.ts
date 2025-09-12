let greet: Function;
greet = () => {
    console.log('hello,again');
    console.log(greet);
}
greet();

const add = (a:number , b:number , c: number|string = 10):void => {
    console.log(a+b);
    console.log(c);
}

add(10,20,30);

const minus = (a:number , b:number): number => {
    return a+b;
}

let result = minus(12,8);
console.log(result);
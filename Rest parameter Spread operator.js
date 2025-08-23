( function () {
    let sum1 = 100;
    let sum2 = 200;
    let full = sum1 +sum2;
    console.log(full);
    
})();

function num(a,b,c,d,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
};

num(1,2,3,4,5,6,7,8,9,0);

let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,0];

let merged =[...num1,...num2];
console.log(merged);


let name = 'nihal';
let oneby = [...name];
console.log(oneby);


let obj1 ={name : 'muhammed nihal'};
let obj2 ={age : 18};

let merged ={...obj1,...obj2};
console.log(merged);

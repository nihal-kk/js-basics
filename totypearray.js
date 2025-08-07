// two types array printing used only for loop not for in loop

let domains = ['mean','mern','python','java'];
let res ='';
for (let i =1;i<=4;i++){
    res += domains[0];
    domains.shift()
    res += "\n"
}
console.log(res);

//---------------------------------------------------------------------------

let domain = ['mean','mern','python','java'];
let rs ='';
for (let i =0;i<domain.length;i++){
  console.log(domain[i]);
  
}


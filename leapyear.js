let year = 1800;
let isleap = 4;
let check1 =100;
let check2 =400;

if(year%isleap ==0 && year%check1!=0 && year%check2!=0){
      console.log("it is a leap year");
}else{
   console.log("it is not a leap year");
}

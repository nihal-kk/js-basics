let person = {name : "nihal"}

function intro(city,charecter){
    console.log(`hi ,iam ${this.name} from ${city} and my character is ${charecter}`);
    
}

let saved = intro.bind(person, 'kozhikkode' , 'crazy');
console.log(saved);
saved();

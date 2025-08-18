let employees = [{name:"shameer",working :true},
                 {name:"shanu",working :false},
                 {name:"ajith",working :false},
                 {name:"shafeeq",working :true}
];
let workingemployees = employees.filter(employees => employees.working);

console.log(workingemployees);

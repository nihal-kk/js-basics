let todo = ['wakeup','brush teeth','have breakfast'];
todo.push("exercise");
todo.pop();
todo.shift();
todo.unshift("meditate");
console.log(todo);
let copy = todo.slice(1,3);
todo.splice(0,2, "take shower")
console.log(copy);
console.log(todo);



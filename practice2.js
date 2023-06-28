let myArray = [1, 2, 3];
let theSameArray = new Array(1, 2, 3);

console.log(myArray[1]);// prints out 2


const numbers=[10,20,30,40,50];
console.table(numbers);

let names = ["Edgar", "Adrian", "Irvin"]
console.table(names);


console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

console.log(numbers.length); 

numbers.push(60,70,80);
numbers.unshift(-10,-20,-30);

console.table(numbers);

names.pop();
names.shift();

names.splice(2,1);
console.table(names);
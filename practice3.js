let array = [1, 2, 3];
let name = ["Edgar", "Adrian", "Brandon", "Shane", "Ricky", "Dorothy", "Jake", "Rom"]

var gpa = [3.5, 3.9, 3.8, 3.5, 3.6, 3.8, 3.6, 3.4,]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

var mean = 0;
var min = gpa[0];
var max = gpa[1];

for (let i = 0; i < name.length; i++) {
    document.write(`<p>${i + 1}, Name : ${name[i]}, GPA: ${gpa[i]}</p>`)
    mean = mean + gpa[i];
    if(gpa[i] > max){
        max = gpa[i];
    }

    if(gpa[i] < min){
        min = gpa[i];
    }
}


console.log("Mean=" + (mean/name.length).toFixed(2))
console.log("Max=" + max);
console.log("Min=" + min);
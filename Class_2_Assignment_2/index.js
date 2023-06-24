console.log("Script");


var user = "Edgar";// Init of the var 
var age = 23;
var isStudent = true;

console.log(user, age, isStudent);

// concatenation
// document.write("<p> Name: " + user +"</p> <p> Age: "+ age +"</p>  <p> Active Student : " + ((isStudent) ? "Active" : "No active" )+"" )
// console.log(user + age + isStudent);

// //  tamplate string
document.write(`
    <p> Name: ${user}</p>
    <p> Age: ${age}</p>
    <p> Active student ${((isStudent) ? "Active" : "No active")}</p>
`);

/* Exercise  1*/

var jobTitle = "Software Engineer";
var geoLocation = "Mexico";
var partnerName = "My girlfriend";
var numberChildren = 2;

document.write(`
    <p> You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numberChildren} kids</p>
`);


/* Exercice 2 */

var name = "Edgar";
var email = "mlanda@uabc.edu.mx";
var pass = "***********";
var age = 23;
var country = "Mexico";
var salary = 1200;

// name = prompt("Enter your name: ");
// email = prompt("Enter your email: ");
// pass = prompt("Enter your password: ");
// age = prompt("Enter your age: ");
// country = prompt("Enter your conuntry");
// salary = prompt("Enter your salary(monthly)");

// var date = new Date();
// var currentYear = date.getFullYear();
// var youryear = prompt("Enter your year born");

// console.log(currentYear - youryear);

// console.log(currentYear);
// console.log(date);

// console.log(`
//     ${name}, ${email}, ${salary * 12}
// `);

// document.write(`<p>Welcome ${name}   ${date} </p>`)

var userBirthdayYear = parseInt(prompt("Enter your birth year"));

function getUserAge() {
    var userBirthdayYear = prompt("enter your birth year");
    var todayDate = new Date();
    var currentYear = todayDate.getFullYear();
    var age = currentYear - userBirthdayYear;
    document.write(`User age is: ${age}`);

    errorMsg(
        "Unspeified",
        "We are not considering the birth month"
    );
    return age;
}

function sum() {
    var num1 = prompt("Add number ");
    var num2 = prompt("Add number ");
    var res =(parseInt(num1) + parseInt(num2));
    document.write(`Result ${res}`);

    errorMsg(
        "Math error",
        "The prompt values were not numbers"
    );
    
    return res;
}

function errorMsg(type, msg) {
    document.write(msg);
    document.write("<p>You have an error of the type: " + type +"</p>")
}

errorMsg(
    "Invalid credentials",
    "Please review your password and try again"
);


errorMsg(
    "Server error",
    "Please try again later, we are technical errors"
);


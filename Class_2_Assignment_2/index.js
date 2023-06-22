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

console.log(`
    ${name}, ${email}, ${salary * 12}
`);
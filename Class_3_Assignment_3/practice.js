var usernameDB = "EdgarLanda";
var passwordDB = "Test1234";


function login() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if(user == usernameDB){
        if (pass == passwordDB) {
            alert("Login is correct");
            document.getElementById("error").innerHTML=`
            <h3>Login correct </h3>
        `
        } else {
            alert("Password is not correct");
            document.getElementById("error").innerHTML=`
            <h3>Password is not correct </h3>
        `
        }
    } else {
        alert("user no exist")
        document.getElementById("error").innerHTML=`
            <h3>User not exist </h3>
        `
    }

}
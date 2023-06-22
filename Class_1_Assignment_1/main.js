var name = "Edgar";                 // 1 
var age = 23;                       // 2
var city = "Tijuana"                // 3
var birthday = [8, 7, 23];          // 4
var email = "mlanda@uabc.edu.mx";   // 5
var user = "edgarlandal";           // 6
var pass = "***********";           // 7
var number = "555-555-5555";        // 8
var status = "Single";              // 9
var height = 1.68;                  // 10
var weight = 90.5;                  // 11
var isSeller = true;
var available = false;
var lastConnection = [27, 6, 23]
var noCart = 2;
var id = 1263337;
var preferences = ["Games", "Tecnology"];
var country = "Mexico";
var position = "Unemployed";
var balance = 0.0

document.write(`
    <p>01.-Name: ${name}</p>
    <p>02.-Age: ${age}</p>
    <p>03.-City: ${city}</p>
    <p>04.-Birthday: ${birthday[0]}/${birthday[1]}/${birthday[2]}</p>
    <p>05.-Email: ${email}</p>
    <p>06.-User: ${user}</p>
    <p>07.-Password: ${pass}</p>
    <p>08.-Number: ${number}</p>
    <p>09.-Status: ${status}</p>
    <p>10.-Height: ${height} m</p>
    <p>11.-Weight: ${weight} kg</p>
    <p>12.-Student: ${((isSeller) ? "Active" : "Disable")}</p>
    <p>13.-Status: ${available}</p>
    <p>14.-Connection ${lastConnection[0]}/${lastConnection[1]}/${lastConnection[2]}</p>
    <p>15.-No. Cart: ${noCart}</p>
    <p>16.-ID: ${id}</p>
    <p>17.-Preferences: ${preferences[0]}, ${preferences[1]}</p >
    <p>18.-Country: ${country}</p>
    <p>19.-Position: ${position}</p>
    <p>20.-Balance: $${balance}</p>
`);
/*Write a program where the user enters information on 
the prompt (product’s name, price and qty) and save the 
info in variables, then you have to display on the console 
the info, subtotal and the final price adding taxes. 
You should have:  

*price Calculation
*tax Calculation
*display Information
 */

var name;
var price;
var qty;
var porcentageOfTax = .16;

function getDatas() {
    name = prompt("Enter your name Product");
    price = parseInt(prompt("Enter price your of Product"));
    qty = parseInt(prompt("Enter your quantity of Product"));

    displayInformation();
}

function pricesCalculation() {
    var tax = taxCalculation();
    var finalPrices = price + tax;
    return qty * finalPrices;
}

function taxCalculation() {
    var tax = price * porcentageOfTax;
    return tax;
}

function displayInformation() {
    if (name == "" || price == NaN || qty == NaN) {
        alert("some data was missing");
    } else {
        document.getElementById("products-info").innerHTML += `
            <h2>Name Product: ${name}</h2> 
            <h3>Price before TAX: ${price}</h3>
            <h3>Price after TAX: ${pricesCalculation()}</h3>
            <h3>Procentage of TAX: ${porcentageOfTax * 100} %</h3>
            <h3>Number of Product: ${qty} </h3>
        `;
    }
}
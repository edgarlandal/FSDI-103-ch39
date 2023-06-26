function calculate() {
    var op = prompt("Enter your operation");

    var num1 = parseInt(prompt("Enter your number 1"));
    var num2 = parseInt(prompt("Enter your number 2"));
    var res = 0;

    switch (op) {
        case "+":
            res = num1 + num2;
            document.getElementById("results").innerHTML = `
            <p> ${num1} + ${num2} = ${res}</p>
        `;

            break;
        case "-":
            res = num1 - num2;
            document.getElementById("results").innerHTML = `
                <p> ${num1} - ${num2} = ${res}</p>
            `;
            break;
        case "*":
            res = num1 * num2;
            document.getElementById("results").innerHTML = `
                <p> ${num1} * ${num2} = ${res}</p>
            `;
            break;
        case "/":
            res = num1 / num2;
            document.getElementById("results").innerHTML = `
                <p> ${num1} / ${num2} = ${res}</p>
            `;
            break;
        default:
            break;
    }

    // if (op == "+") {
    //     res = num1 + num2;
    //     document.getElementById("results").innerHTML = `
    //         <p> ${num1} + ${num2} = ${res}</p>
    //     `;
    // }

    // if (op == "-") {
    //     res = num1 - num2;
    //     document.getElementById("results").innerHTML = `
    //         <p> ${num1} - ${num2} = ${res}</p>
    //     `;
    // }

    // if (op == "*") {
    //     res = num1 * num2;
    //     document.getElementById("results").innerHTML = `
    //         <p> ${num1} * ${num2} = ${res}</p>
    //     `;
    // }

    // if (op == "/") {
    //     res = num1 / num2;
    //     document.getElementById("results").innerHTML = `
    //         <p> ${num1} / ${num2} = ${res}</p>
    //     `;
    // }

    // var sum = num1 + num2;
    // var sub = num1 - num2;
    // var mul = num1 * num2;
    // var div = num1 / num2;

    // document.getElementById("results").innerHTML = `
    //     <p> ${num1} + ${num2} = ${sum}</p>
    //     <p> ${num1} - ${num2} = ${sub}</p>
    //     <p> ${num1} * ${num2} = ${mul}</p>
    //     <p> ${num1} / ${num2} = ${div}</p>
    //     `;
}
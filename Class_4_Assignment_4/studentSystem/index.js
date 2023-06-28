function calculateGPA() {
    var name = prompt("Enter your name");
    var grade1 = parseInt(prompt("Enter your grade 1"))
    var grade2 = parseInt(prompt("Enter your grade 2"))
    var grade3 = parseInt(prompt("Enter your grade 3"))
    
    var gpa = (grade1 + grade2 + grade3) / 3;
    
    // document.write(`
    //     <h2> Student ${name} have GPA: </h2>
    //     <h3> Grade 1: ${grade1}</h3>
    //     <h3> Grade 2: ${grade2}</h3>
    //     <h3> Grade 3: ${grade3}</h3>
    //     <h3> GPA: ${gpa}</h3>
    // `);

    displayInfo(name, grade1, grade2, grade3, gpa);
}

function displayInfo(name, grade1, grade2, grade3, gpa) {
    document.getElementById("studentinfo").innerHTML+=`
        <li>
            Name: ${name}
            Grade 1: ${grade1}
            Grade 2: ${grade2}
            Grade 2: ${grade3}
            GPA: ${gpa.toFixed(2)}
        </li>
    `
}
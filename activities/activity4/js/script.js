//Initialize Variables
var name = "Ana"; 

var age = 30; 

var enrolled = true; 

// Student Validity check

if (enrolled) {
    console.log(name + " is a student.");
} else {
    console.log(name + " is not a student.");
}

// Calculate the age + 8
var ageIn8Years = age + 8;

// Output Message
var message = name + " is " + age + " years old. In 8 years, they will be " + ageIn8Years + " years old.";

document.getElementById("ageMessage").textContent = message;

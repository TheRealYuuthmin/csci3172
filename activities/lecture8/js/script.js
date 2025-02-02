// Get the current time and hour
// HINT: you will have to first get the full date and then get the time and hour of the day
// You may explore the use of JS built-in functions

const date = new Date();
const hour = date.getHours();

// Create a variable to store your greeting message 

let greetingMessage;

// Based on the hour you get, you need to set the conditions you want your script to check
// in order to render a specific message

if (hour < 12){ // for now we want to say 'Good Morning' if it is earlier than 12PM
	greetingMessage = "Good Morning";
} else if (hour < 15){ // otherwise we want to check if it is earlier than 3PM and let the visitor know
	greetingMessage = "Hey! I think we are in class!"
} else { // For any other time (i.e., later than 3PM, we just want to say 'Welcome'
	greetingMessage = "Welcome"
}

// Then, we use the DOM, and calling the 'getElementById( )' method and its innerHTML property to add some HTML for us onto our webpage
// we basically want to show the return result in <h2 id="greeting"></h2>
document.getElementById("greetingMessage").innerHTML = greetingMessage;

// In this section of our script, we want to access the values the user entered into our form
// and add them together
// First we declare our variables for the two values
// Now, let's use the DOM now to access a value in our form and show it back to us in an alert( ) box
// First, we'll creatr a function to store the input values into the variables we declared
// We'll enclose that code block in a function, getNumbers( )

    // Store the values from the form into the variables we declared above
	function getNumbers(){
		const number1 = parseFloat(document.getElementById("number1").value);
		const number2 = parseFloat(document.getElementById("number2").value);
		return{number1, number2};
	}
	// Call the getNumbers() function to import the values the user enteres into the form into 
	// this function
	// We perform our addition on the two values
	// Display the result of the calculation
	
//function to calculate based on the operation 
function calculate(operation){
	const {number1, number2} = getNumbers();
	let result;

	switch(operation){
		case "add":
			result = number1 + number2;
			break;
		case "subtract":
			result = number1 - number2;
			break;
		case "divide":
			result = number1 / number2;
			break;
		case "multiply":
			result = number1 * number2;
			break;
		default:
			result = "Invalid Operation";
	}
	alert(`Result: ${result}`);
}





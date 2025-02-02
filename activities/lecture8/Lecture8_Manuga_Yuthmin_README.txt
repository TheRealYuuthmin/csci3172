# CSCI 3172 Activity Lecture 8

*Date created: 02 Feb 2025
*Last modification: 02 Feb 2025
*Lab URL:
https://web.cs.dal.ca/~bandara/csci3172/activities/lecture8/index.html
https://git.cs.dal.ca/bandara/csci3172.git

##Built with
*HTML
*CSS
*JavaScript

##Sources used

### index.html
Lines 46 - 56


<!-- Addition button-->
<input type="button" name="add" value="Add" onclick="calculate('add')">

<!-- Subtraction button-->
<input type="button" name="subtract" value="Subtract" onclick="calculate('subtract')">

<!-- Division button-->
<input type="button" name="divide" value="Divide" onclick="calculate('divide')">

<!-- Multiplication button-->
<input type="button" name="multiply" value="Multiply" onclick="calculate('multiply')">

The form above was created by adapting the code in https://www.w3schools.com/html/html_forms.asp as shown below:
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>

###script.js
Lines 1 - 21
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



The code above was generated using https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date as shown below:

const date = new Date();
const hour = date.getHours();
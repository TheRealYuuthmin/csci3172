#CSCI 3172 Lab 4

*Date Created: 22 Feb 2025
*Last modified date: 23 Feb 2025
*Lab URL:
web.cs.dal.ca/~bandara/csci3172/labs/lab4/index.html
https://git.cs.dal.ca/bandara/csci3172.git

##Author - Manuga Yuthmin Wijesundara Bandara B00944453

##Built with 
*HTML
*CSS
*JavaScript

##Sources used:

*Lines 10 -16
function showError(inputElement, message) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;
    inputElement.classList.add("error");
    inputElement.parentNode.appendChild(errorMessage);
}

The code was adapted using the code in https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement as shown below:
const para = document.createElement("p");
const node = document.createTextNode("This is a new paragraph.");
para.appendChild(node);

*How: Create a new paragraph element and append a node to it 

*Why: It can dynamically create and insert elements into the DOM in order to display error messages

*How: the example was modified by adding a lass for styling & setting its text context accordingly. 

*Lines 19 - 22
function clearErrors() {
    document.querySelectorAll(".error-message").forEach(el => el.remove());
    document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
}

The code was adapted using the code in https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll as shown below:
const matches = document.querySelectorAll('div.note, div.alert');

*How: Select all elements matching the specific css selector

*Why: It demonstrates how to select multiple elements in the DOM using CSS selectors 

*How: MDNs example was modified by selecting elements with specific clkasses related to error messages and iterating over NodeList to remove or modify these elements

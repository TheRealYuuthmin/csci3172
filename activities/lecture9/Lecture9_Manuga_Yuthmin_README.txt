# CSCI 3172 Activity 9 

*Date Created: 10 02 2025
*Last Modified: 10 02 2025
*URL: 
https://git.cs.dal.ca/bandara/csci3172.git
web.cs.dal.ca/~bandara/csci3172/activities/lecture9/index.html

##Author - Manuga Yuthmin Wijesundara Bandara B00944453

#Built With
*HTML5
*CSS3
*JavaScript

## Sources Used

###Script.js

*Lines 1 - 26*

document.addEventListener("DOMContentLoaded",function(){
    //Selecting input fields 
    const fieldInput = [
        document.getElementById("firstName"),
        document.getElementById("lastName"),
        document.getElementById("email")
    ];

    //Change background on focus
    function focusHandle(event){
        console.log("Focus event triggered on:", event.target.id);
        event.target.classList.add("active");
    }

    //Reset background on blur
    function blurHandle(event){
        console.log("Blur event triggered on:", event.target.id);
        event.target.classList.remove("active");
    }

    //Loop input fields and event listeners
    fieldInput.forEach(input => {
        input.addEventListener("focus", focusHandle);
        input.addEventListener("blur",blurHandle);
    });
});

The code above was created by adapting the code in [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) as shown below:

document.addEventListener("DOMContentLoaded", function () {
    let input = document.querySelector("input");
    
    input.addEventListener("focus", function(event) {
        event.target.style.background = "yellow";
    });
    
    input.addEventListener("blur", function(event) {
        event.target.style.background = "";
    });
});
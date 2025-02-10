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
// *******************check password *****************************

const strength = {
    0: "Worst ☹",
    1: "Bad ☹",
    2: "Weak ☹",
    3: "Good ☺",
    4: "Strong ☻"
}

const password = document.getElementById('password');
const meter = document.getElementById('password-strength-meter');
const text = document.getElementById('password-strength-text');

password.addEventListener('input', function()
{
    const val = password.value;
    const result = zxcvbn(val);
  
    // Update the password strength meter
    meter.value = result.score;
   
    // Update the text indicator
    if(val !== "") {
        text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span"; 
    }
    else {
        text.innerHTML = "";
    }
});

// *******************check email *****************************



const emailInput = document.getElementById("email");

// Add the focusout event listener
emailInput.addEventListener("focusout", function () {
    validateEmail(emailInput.value);
});

// Email validation function
function validateEmail(emailValue) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailRegex.test(emailValue)) {
        // alert("Valid email address!");
    } else {
        alert("You have entered an invalid email address!");
        emailInput.focus();
    }
}


// const firstNameInput = document.getElementById("firstName");
// // Add the focusout event listener
// firstNameInput.addEventListener("focusout", function () {
//     validateEmail(firstNameInput.value);
// });

// function validateFirstName(firstNameValue) {
//     if (firstNameValue == "" || x == null) {
//       alert("Name must be filled out");
//       return false;
//     }
//   }



const firstNameInput = document.getElementById("firstName");

// Add the focusout event listener to the first name input field
firstNameInput.addEventListener("focusout", function () {
    validateFirstName(firstNameInput.value);  // Validate when focus leaves the input
});

// Validate the first name
function validateFirstName(firstNameValue) {
    // Check if the first name is empty
    if (firstNameValue === "" || firstNameValue == null) {
        alert("first name must be filled out");  // Show an alert if it's empty
        firstNameInput.focus();  // Optionally focus the input field again to prompt the user
        return false;
    }
    return true;  // Return true if the name is not empty
}


//////check lastname

const lastNameInput = document.getElementById("lastName");

//Add the focusout event listener to the last name  input field
lastNameInput.addEventListener("focusout",function(){
    validateLastName(lastNameInput.Value);
})

function validateLastName(lastNameValue) {
    if (lastNameValue ==="" || lastNameValue == null){
        alert("Last name must be filled out");
        lastNameInputNameInput.focus();  // Optionally focus the input field again to prompt the user
        return false;
    }
    return true; 
}



//////check username 
const usernameInput = document.getElementById("username");

//Add the focusout event listener to the last name  input field
usernameInput.addEventListener("focusout",function(){
    validateusername(usernameInput.Value);
})

function validateusername(usernameValue) {
    if (usernameValue ==="" || usernameValue == null){
        alert("User name must be filled out");
        usernameInputNameInput.focus();  // Optionally focus the input field again to prompt the user
        return false;
    }
    return true; 
}

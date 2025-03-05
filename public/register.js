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
        if (result.score < 3) {
            // Weak password - show error icon
            password.style.backgroundImage = "url('../assets/images/error.svg')";
        } else {
            // Strong password - show check icon
            password.style.backgroundImage = "url('../assets/images/check.svg')";
        }

        password.style.backgroundRepeat = "no-repeat";
        password.style.backgroundPosition = "right 10px center";
        password.style.backgroundSize = "auto 60%";
    } else {
        password.style.backgroundImage = "none";
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
        emailInput.style.backgroundImage = "url('../assets/images/check.svg')"; 
        emailInput.style.backgroundRepeat = "no-repeat"; 
        emailInput.style.backgroundPosition = "right 10px center"; 
        emailInput.style.backgroundSize = "auto 60%";
    } else {
        alert("You have entered an invalid email address!");
        // emailInput.focus();
        emailInput.style.backgroundImage = "url('../assets/images/error.svg')"; 
        emailInput.style.backgroundRepeat = "no-repeat"; 
        emailInput.style.backgroundPosition = "right 10px center"; 
        emailInput.style.backgroundSize = "auto 60%"; 
    }
}



const firstNameInput = document.getElementById("firstName");

// Add the focusout event listener to the first name input field
firstNameInput.addEventListener("focusout", function () {
    validateFirstName(firstNameInput.value);  // Validate when focus leaves the input
});

// Validate the first name
function validateFirstName(firstNameValue) {
    if (firstNameValue ==="" || firstNameValue == null){
        firstNameInput.style.backgroundImage = "url('../assets/images/error.svg')"; 
        firstNameInput.style.backgroundRepeat = "no-repeat"; 
        firstNameInput.style.backgroundPosition = "right 10px center"; 
        firstNameInput.style.backgroundSize = "auto 60%"; 
        alert("firstName must be filled out");
    } else {
        firstNameInput.style.backgroundImage = "url('../assets/images/check.svg')"; 
        firstNameInput.style.backgroundRepeat = "no-repeat"; 
        firstNameInput.style.backgroundPosition = "right 10px center"; 
        firstNameInput.style.backgroundSize = "auto 60%";

    }
}


//////check lastname

const lastNameInput = document.getElementById("lastName");

//Add the focusout event listener to the last name  input field
lastNameInput.addEventListener("focusout",function(){
    validateLastName(lastNameInput.value);
})

function validateLastName(lastNameValue) {
    if (lastNameValue ==="" || lastNameValue == null){
        lastNameInput.style.backgroundImage = "url('../assets/images/error.svg')"; 
        lastNameInput.style.backgroundRepeat = "no-repeat"; 
        lastNameInput.style.backgroundPosition = "right 10px center"; 
        lastNameInput.style.backgroundSize = "auto 60%"; 
        alert("lastName must be filled out");
    } else {
        lastNameInput.style.backgroundImage = "url('../assets/images/check.svg')"; 
        lastNameInput.style.backgroundRepeat = "no-repeat"; 
        lastNameInput.style.backgroundPosition = "right 10px center"; 
        lastNameInput.style.backgroundSize = "auto 60%";

    }
}



//////check username 
const usernameInput = document.getElementById("username");

//Add the focusout event listener to the last name  input field
usernameInput.addEventListener("focusout",function(){
    validateusername(usernameInput.value);
})

function validateusername(usernameValue) {
    if (usernameValue ==="" || usernameValue == null){
        usernameInput.style.backgroundImage = "url('../assets/images/error.svg')"; 
        usernameInput.style.backgroundRepeat = "no-repeat"; 
        usernameInput.style.backgroundPosition = "right 10px center"; 
        usernameInput.style.backgroundSize = "auto 60%"; 
        alert("Username must be filled out");
    } else {
        usernameInput.style.backgroundImage = "url('../assets/images/check.svg')"; 
        usernameInput.style.backgroundRepeat = "no-repeat"; 
        usernameInput.style.backgroundPosition = "right 10px center"; 
        usernameInput.style.backgroundSize = "auto 60%";

    }

}


//********check all the input for sign up button */


const elements = document.querySelectorAll(".form-control");
const btn = document.getElementById("btnMyStyle");

// Function to check if all inputs have the check icon
function validateAllInput() {
    let allValid = true;

    elements.forEach(element => {
        if (element.style.backgroundImage !== "url(\"../assets/images/check.svg\")") {
            allValid = false;
        }
    });

    btn.disabled = !allValid; // Disable if any input is invalid
}

// Add event listener to the button
btn.addEventListener("focusout", validateAllInput);



//  

// Event listener for form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    

    // Check if username already exists in localStorage
    const existingUser = JSON.parse(localStorage.getItem('user'))
    if (existingUser) {
        alert("Username already exists, please enter another one!");
        return;
    }

    // Create user object
    const user = {
        username: username,
        password: password,
        email:email
    };

    // Store user data in localStorage
    localStorage.setItem(user, JSON.stringify(user));
    alert("Sign up successful");

    // Redirect to profile page after successful signup
    window.location.href = 'profile.html';
});

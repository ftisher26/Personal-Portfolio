
/* Cuando es una clase es con "." y cuando es un id
se usa el # a la hora de usar querySelector. En cambio,
cuando usamos getElementById es específico y es con nombre */

// Hamburguer menu
const navToggle = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");
const navIcons = document.querySelector(".nav-icons");

navToggle.addEventListener("click", (e) => {
  navLinks.classList.toggle("show-links");
  e.preventDefault();
});

document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("show-links")
    && !navToggle.contains(e.target) && !navLinks.contains(e.target)) { navLinks.classList.remove("show-links"); }
});

// EMAIL VALIDATION CONST
const mainForm = document.querySelector(".contact-form");
const subBtn = document.getElementById("submit-btn");
const popUp = document.getElementById("notification");
const errorPopup = document.getElementById("popup");
const errorBar = document.getElementById("popup-progress");

// Constantes son variables a las cuales tienen un valor el que no 
// se puede reasignar y/o modificar una vez se declaro inicialmente


// Listener that listens for whenever someone click or enter the submBTN

mainForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  // Prevents the refresh of the page and also i set a variable
  // event and, then i call it back in the default method with the same one
  const userName = document.getElementById("username").value;
  const lastName = document.getElementById("lastname").value;
  const userEmail = document.getElementById("useremail").value;
  const message = document.getElementById("message").value;
  const privacyCheck = document.getElementById("checkbox").checked;

  const userName1 = document.getElementById("username");
  const lastName1 = document.getElementById("lastname");
  const userEmail1 = document.getElementById("useremail");
  const message1 = document.getElementById("message");
  const privacyCheck1 = document.getElementById("checkbox");

  // All the inputs
  const inputs = document.getElementsByTagName("input");

  let esValido = true;

  const allEmpty = !userName.trim() && !lastName.trim() && !userEmail.trim() && !message.trim() && !privacyCheck;
  const atLeastOneEmpty = !userName.trim() || !lastName.trim() || !userEmail.trim() || !message.trim() || !privacyCheck;
  const allInputs = document.querySelectorAll('#username, #lastname, #useremail, #message, #checkbox');

  if (allEmpty) {
    errorPopup.classList.add("is-visible");
    errorBar.classList.add("is-visible");
    setTimeout(() => {
      errorPopup.classList.remove("is-visible");
      errorBar.classList.remove("is-visible");
    }, 5350);
    userName1.classList.add("invalid");
    lastName1.classList.add("invalid");
    userEmail1.classList.add("invalid");
    message1.classList.add("invalid");
    privacyCheck1.classList.add("invalid");
    esValido = false;
    event.preventDefault();
    return;
  } else if (atLeastOneEmpty) {
    errorPopup.classList.add("is-visible");
    errorBar.classList.add("is-visible");
    setTimeout(() => {
      errorPopup.classList.remove("is-visible");
      errorBar.classList.remove("is-visible");
    }, 5350);
    if (userName.trim() === "") {
      userName1.classList.add("invalid");
    }
    if (lastName.trim() === "") {
      lastName1.classList.add("invalid");
    }
    if (userEmail.trim() === "") {
      userEmail1.classList.add("invalid");
    }
    if (message.trim() === "") {
      message1.classList.add("invalid");
    }
    if (!privacyCheck) {
      privacyCheck1.classList.add("invalid");
    }
    esValido = false;
    event.preventDefault();
    return;
  }

  const formData = new FormData(event.target);
  const plainFormData = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("http://localhost:4000/api/data", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(plainFormData)
    });
    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }
    const responseData = await response.json();
    console.log('Server response:', responseData);
  } catch (error) {
    console.error('Request failed:', error.message);
  }


  if (esValido) {
    event.preventDefault();
    // mainForm.submit();
    popUp.classList.add("is-visible");
    setTimeout(() => {
      popUp.classList.remove("is-visible");
    }, 2830);
    console.log("Form Submitted!");
  }
});

// lISTENER TYPING EMAIL
const emailInput = document.getElementById("useremail")
const errorMessage = document.getElementById("error-email")

//  Regular expression (RegExp) to validate the email
//  Let is a variable and the array is the value stored/inside that VARIABLE
//  Structure - variable name = array (elements are inside of the container)    
emailInput.addEventListener("input", (e) => {
  const currentEmail = e.target.value; //Captures the current string [1]
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (currentEmail && !regex.test(currentEmail)) {
    errorMessage.textContent = "Please enter a valid email address"
    emailInput.classList.add("invalid")
  } else {
    errorMessage.textContent = ""
    emailInput.classList.add("valid")
  }

  console.log(currentEmail); // Log the final value [7]
});
const card1 = document.querySelector(".card-1");
const leftSection = document.querySelector(".left-section");
const rightSection = document.querySelector(".right-section");

const userEmail = document.getElementById("user-email");
const invalidEmail = document.getElementById("invalid-email");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");

const card2 = document.getElementById("card-2");
const dismissBtn = document.getElementById("dismiss-btn");

function formSuccess() {
  card2.classList.add("active");
  card1.classList.add("success");
  leftSection.style.display = "none";
  rightSection.style.display = "none";
}


function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex expression to check if the email is valid or not
  return emailRegex.test(email);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();  

  if (validateEmail(email)) { 
    formSuccess();
    userEmail.textContent = email;
    emailInput.value = "";

    invalidEmail.classList.remove("active");
    emailInput.classList.remove("active");
  } else {
    invalidEmail.classList.add("active");
    emailInput.classList.add('active');
  }
});

dismissBtn.addEventListener("click", () => {
  leftSection.style.display = "flex";
  rightSection.style.display = "block";
  card1.classList.remove("success");
  card2.classList.remove("active");
  emailInput.value = "";
});





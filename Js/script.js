const heroFormInput = document.querySelector(".hero__");
const notifyFormInput = document.querySelector(".noti__");

let checkInput = (inputField) => {
  let errorMessage = ["Please, fill in this field"];

  if (inputField.matches(/(ae)/g)) {
    console.log("ITMATCHES");
  }
};

// FOR THE NAV-BAR
const navBar = document.querySelector(".nav");
const toggle = document.querySelector(".toggle");

if (toggle.checked === true) {
    navBar.style.backgroundColor = "red";
}
else {
  navBar.classList.remove('fixed-position')
}

// toggle.addEventListener("toggle", () => {
// });

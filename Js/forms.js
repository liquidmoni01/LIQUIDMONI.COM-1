// Get all the inputs, validate them and pass them on to the backend for authentication.
const homePageEmailAddressInput = document.querySelector(
  ".form__fieldset__email-input"
);
const homePageFormSubmitButton = document.querySelector(
  ".form__fieldset__button"
);
console.log("WORKING");

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/g;
// const emailPatterns = /\@#\$\&-_\+\^%\\\/\\.com.org.ng./g;

// check if email matches this rule, if not don't allow user login.
let checkEmailInput = () => {
  if (homePageEmailAddressInput.value.match(emailPattern)) {
    console.log("User Accepted");
  } else {
    console.log("User Unaccepted");
  }
};

homePageFormSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  checkEmailInput();
});

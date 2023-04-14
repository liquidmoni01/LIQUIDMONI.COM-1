// import { signInWithEmailAndPassword } from "../backend-auth/signin-user";
// import { auth1 } from "../backend-auth/create-user.js";
// Get all the inputs, validate them and pass them on to the backend for authentication.

const homePageFormSubmitButton = document.querySelector(
  ".form__fieldset__button"
);
const loginFormSubmitButton = document.querySelector(".log-in__submit-button");
const signUpFormSubmitButton = document.querySelector(
  ".sign__up-submit-button"
);
const googleSignInButton = document.querySelector(".log-in__options")[0];
const faceBookSignInButton = document.querySelector(".log-in__options")[1];

const googleSignUpButton = document.querySelector(".sign__up-options")[0];
const faceBookSignUpButton = document.querySelector(".sign__up-options")[1];

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/g;
const requiredPwLength = 6;

// check if email matches this rule, if not don't allow user login.
let checkEmailInput = (emailInput, passwordInput = null, executeFunc) => {
  emailInput.value.match(emailPattern) &&
  passwordInput.length < requiredPwLength
    ? executeFunc()
    : console.log("User Unaccepted");
};

signUpFormSubmitButton.addEventListener("click", (e) => {
  checkEmailInput(signUpEmailInput);
});

export {
  homePageFormSubmitButton,
  signUpFormSubmitButton,
  loginFormSubmitButton,
  emailPattern,
  requiredPwLength,
  checkEmailInput,
};

// homePageFormSubmitButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   // checkEmailInput(homePageEmailAddressInput);
// });

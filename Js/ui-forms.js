const notifyForm = document.querySelector(".form");
const notifyEmail = notifyForm["email"];
const notifyButton = document.querySelector(".form__fieldset__button");

const homePageFormSubmitButton = document.querySelector(
  ".form__fieldset__button"
);

// all variables needed
const signUpForm = document.querySelector(".sign__up-form");
const signUpEmail = signUpForm["sign__up-email"].value;
const signUpPassword = signUpForm["sign__up-password"].value;
const signUpButton = document.querySelector(".sign__up-button");

const loginEmailInput = document.querySelector(".log-in__input")[0];
const loginPasswordInput = document.querySelector(".log-in__input")[1];

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/g;
const requiredPwLength = 6;

const loginFormSubmitButton = document.querySelector(".log-in__submit-button");
const signUpFormSubmitButton = document.querySelector(
  ".sign__up-submit-button"
);
const googleSignInButton = document.querySelector(".log-in__options")[0];
const faceBookSignInButton = document.querySelector(".log-in__options")[1];

const googleSignUpButton = document.querySelector(".sign__up-options")[0];
const faceBookSignUpButton = document.querySelector(".sign__up-options")[1];

export {
  notifyForm,
  notifyEmail,
  notifyButton,
  homePageFormSubmitButton,
  loginFormSubmitButton,
  signUpFormSubmitButton,
  googleSignInButton,
  faceBookSignInButton,
  googleSignUpButton,
  faceBookSignUpButton,
  signUpButton,
  signUpEmail,
  signUpForm,
  signUpPassword,
  loginEmailInput,
  loginPasswordInput,
  emailPattern,
  requiredPwLength, 
};

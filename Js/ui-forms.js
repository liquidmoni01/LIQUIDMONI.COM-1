const notifyForm = document.querySelector(".form");
const notifyEmail = document.querySelector(".form__email");
const notifyButton = document.querySelector(".form__fieldset__button");

const homePageFormSubmitButton = document.querySelector(
  ".form__fieldset__button"
);

// all variables needed
const signUpForm = document.querySelector(".sign__up-form");
const signUpEmail = document.getElementById("sign__up-email");
const signUpPassword = document.getElementById("sign__up-password");
const signUpButton = document.querySelector(".sign__up-button");

const loginEmailInput = document.querySelectorAll(".log-in__input")[0];
const loginPasswordInput = document.querySelectorAll(".log-in__input")[1];

const contactForm = document.querySelector("contact__form");
const contactName = contactForm;

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/g;
const requiredPwLength = 6;

const loginFormSubmitButton = document.querySelector(".log-in__submit-button");
const signUpFormSubmitButton = document.querySelector(
  ".sign__up-submit-button"
);
const googleSignInButton = document.querySelectorAll(".log-in__options")[0];
const faceBookSignInButton = document.querySelectorAll(".log-in__options")[1];

const googleSignUpButton = document.querySelectorAll(".sign__up-options")[0];
const faceBookSignUpButton = document.querySelectorAll(".sign__up-options")[1];

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

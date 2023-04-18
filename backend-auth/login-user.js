import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { checkEmailInput, loginFormSubmitButton } from "../Js/forms";

// const App2 = initializeApp(firebaseConfig);
const auth2 = getAuth();
const dbForLoggedInUsers = getDatabase();

loginFormSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  // frontend - validation
  const loginEmailInput = document.querySelector(".log-in__input")[0];
  const loginPasswordInput = document.querySelector(".log-in__input")[1];

  // backend - authentication
  checkEmailInput(loginEmailInput, loginPasswordInput);
  handleSignIn(loginEmailInput, loginPasswordInput);
});

let handleSignIn = (emailInput, passwordInput) => {
  signInWithEmailAndPassword(auth2, emailInput.value, passwordInput.value)
    .then((signInDetails) => {
      const existingUser = signInDetails.user;
      console.log(emailInput.value);
      console.log(passwordInput.value);

      // store the user's data into the database
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

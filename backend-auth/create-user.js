import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./login-user";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { signUpFormSubmitButton } from "../Js/forms";

const App1 = initializeApp(firebaseConfig);
const auth1 = getAuth();
const dbForNewUsers = getDatabase();

signUpFormSubmitButton.addEventListener("click", () => {
  // frontend - validation
  const signUpEmailInput = document.querySelector(".sign__up-input")[0];
  const signUpPasswordInput = document.querySelector(".sign__up-input")[1];

  // backend - authentication
  checkEmailInput(signUpEmailInput, signUpPasswordInput);
  handleSignUp(signUpEmailInput, signUpPasswordInput);
});

let handleSignUp = (emailInput, passwordInput) => {
  // authentication
  createUserWithEmailAndPassword(auth1, emailInput.value, passwordInput.value)
    .then((signInDetails) => {
      const newUser = signInDetails.user;

      // store the user's data into the database
      set(ref(dbForNewUsers, "users/" + user.uid), {
        emailAddress: emailInput.value,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

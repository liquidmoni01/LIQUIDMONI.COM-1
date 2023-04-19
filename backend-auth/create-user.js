<<<<<<< HEAD
// import { getDatabase, ref, set } from "firebase/database";
// import { signUpFormSubmitButton } from "../Js/forms";
// const App1 = initializeApp(firebaseConfig);
// const dbForNewUsers = getDatabase();
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/g;
const requiredPwLength = 6;
const signUpForm = document.querySelector(".sign__up-form");
const signUpEmail = signUpForm["sign__up-email"].value;
const signUpPassword = signUpForm["sign__up-password"].value;
=======


import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./login-user";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
const firebaseConfig = {
  apiKey: "AIzaSyBNVTxjCatZxSiZhc5HY8Gr64lBMlb9fiA",
  authDomain: "liquidmoni-project-3d474.firebaseapp.com",
  projectId: "liquidmoni-project-3d474",
  storageBucket: "liquidmoni-project-3d474.appspot.com",
  messagingSenderId: "305360626126",
  appId: "1:305360626126:web:7f8889f18c 97247a960b9f",
  measurementId: "G-0QLYZCMM04",
};
>>>>>>> tweaks

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // frontend - validation

  console.log(signUpEmail, signUpPassword);
  // backend - authentication
  auth
    .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
    .then((signedInUser) => {
      console.log(signedInUser);
    })
    .catch((error) => {
      // error
    });
<<<<<<< HEAD
  checkEmailInput(signUpEmail, signUpPassword);
  handleSignUp(signUpEmail, signUpPassword);
=======
>>>>>>> tweaks
});

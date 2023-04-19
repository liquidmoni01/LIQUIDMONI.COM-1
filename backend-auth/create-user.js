

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

const App = initializeApp(firebaseConfig);

const signUpFormSubmit = document.querySelector(".sign__up-form");

signUpFormSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  // frontend - validation
  const signUpEmail = signUpFormSubmit["sign__up-email"].value;
  const signUpPassword = signUpFormSubmit["sign__up-password"].value;

  console.log(signUpEmail, signUpPassword);
  // backend - authentication
  auth
    .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
    .then((signedInUser) => {
      console.log(signedInUser);
    });
});

// BEFORE USING FIREBASE SERVICES, THE FIREBASE APP MUST BE INITIALIZED FIRST, BECAUSE WITHOUT IT, YOU CAN'T GET ACCESS TO THE FIREBASE LIBRARY FROM THE NET. THIS IS WHY IT'S IMPORTANT TO ALWAYS IMPORT THE FIREBASE APP, IMMEDIATELY AFTER INSTALLING FIREBASE, AND BEFORE YOU USE IT ON ANY OF YOUR PROJECTS.

// IMPORT THE SERVICE BEFORE CALLING IT.
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import {get} from

const firebaseApp = initializeApp({});

const auth = getAuth(firebaseApp);

// monitor authentication state.
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    alert("LOGGED IN");
  } else {
    alert("Not Logged In");
  }
});

// What treeshaking does.
auth.onAuthStateChanged((user) => {
  if (user != null) {
    console.log("Logged In");
  } else {
    console.log("Not logged in, and no user");
  }
});

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

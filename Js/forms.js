// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyCEyEZjXsiAo60dcNRvwWZgUK9v567Wq4A",
  authDomain: "liquidmoni-backend.firebaseapp.com",
  databaseURL: "https://liquidmoni-backend-default-rtdb.firebaseio.com",
  projectId: "liquidmoni-backend",
  storageBucket: "liquidmoni-backend.appspot.com",
  messagingSenderId: "167765509992",
  appId: "1:167765509992:web:d59ec2351d4b56972478dd",
  measurementId: "G-1R2WGX7J8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const signUpForm = document.querySelector(".sign__up-form");
const logInForm = document.querySelector(".log-in__form");
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/g;
const requiredPwLength = 6;

// let SignUpButton = document.querySelector(".");
// let logInButton = document.querySelector(".");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let signUpEmail = document.querySelector("#sign__up-email").value;
  let signUpPassword = document.querySelector("#sign__up-password").value;
  // frontend - validation

  console.log(signUpEmail, signUpPassword);
  // backend - authentication
  auth
    .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
    .then((newUser) => {
      console.log(newUser);
      document.querySelector(".sign__up-note").computedStyleMap.display =
        "block";
    })
    .catch((error) => {
      // error
      console.log(error);
    });
});

logInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let logInEmail = document.querySelector("#log-in__email").value;
  let logInPassword = document.querySelector("#log-in__password").value;
  // frontend - validation

  console.log(logInEmail, logInPassword);
  // backend - authentication
  auth
    .signInUserWithEmailAndPassword(logInEmail, logInPassword)
    .then((signedInUser) => {
      console.log(signedInUser);
      document.querySelector(".log-in__note").style.display = "block";
    })
    .catch((error) => {
      // error
      console.log(error);
    });
});

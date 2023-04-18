// import { getDatabase, ref, set } from "firebase/database";
// import { signUpFormSubmitButton } from "../Js/forms";
// const App1 = initializeApp(firebaseConfig);
// const dbForNewUsers = getDatabase();
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/g;
const requiredPwLength = 6;
const signUpForm = document.querySelector(".sign__up-form");
const signUpEmail = signUpForm["sign__up-email"].value;
const signUpPassword = signUpForm["sign__up-password"].value;

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
  checkEmailInput(signUpEmail, signUpPassword);
  handleSignUp(signUpEmail, signUpPassword);
});

// let handleSignUp = (emailInput, passwordInput) => {
//   // authentication
//   createUserWithEmailAndPassword(auth1, emailInput.value, passwordInput.value)
//     .then((signInDetails) => {
//       const newUser = signInDetails.user;

//       // store the user's data into the database
//       set(ref(dbForNewUsers, "users/" + user.uid), {
//         emailAddress: emailInput.value,
//       });
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// };

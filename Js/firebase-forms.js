import {
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
} from "./ui-forms";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// import and initialize the functions and getters you use

const firebaseConfig = {
  apiKey: "AIzaSyCEyEZjXsiAo60dcNRvwWZgUK9v567Wq4A",
  authDomain: "liquidmoni-backend.firebaseapp.com",
  projectId: "liquidmoni-backend",
  storageBucket: "liquidmoni-backend.appspot.com",
  messagingSenderId: "167765509992",
  appId: "1:167765509992:web:d59ec2351d4b56972478dd",
  measurementId: "G-1R2WGX7J8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const firebaseDatabase = app.database().ref("Useremails");
const auth = getAuth();
connectAuthEmulator(auth, "https://localhost:9099");

const database = getDatabase();

signUpButton.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSignUp(signUpEmail, signUpPassword);
});

loginFormSubmitButton.addEventListener("click", () => {
  handleSignIn(loginEmailInput, loginPasswordInput);
});

// sign-up
let handleSignUp = async (emailVal, passwordVal) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      emailVal,
      passwordVal
    );
    console.log(userCredentials.user);
  } catch (error) {
    console.log(error);
  }
};

// sign-in
let handleSignIn = async (emailVal, passwordVal) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      emailVal,
      passwordVal
    );
    console.log(userCredentials.user);
  } catch (error) {
    console.log(error);
  }
};

// check login status
let monitorAuthState = (async = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      showApp();
      showLoginState();

      hideLoginError();
    } else {
      showLoginForm();
    }
  });
});

monitorAuthState();

// sign-out
let signUserOut = async () => {
  await signOut();
};

// notify

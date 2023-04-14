// FOR THE FIREBASE BACKEND OF THE WEBSITE.
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const authentication = getAuth();

// authenticate the user they sign in - Create User
createUserWithEmailAndPassword(authentication, email, password)
  .then((signInDetails) => {
    // if signed in
    const signedInUser = signInDetails.user;
  })
  // if user is not signed in
  .catch((err) => {
    const errorCode = err.code;
    const errorMessage = err.message;
  });

// Sign in User
signInWithEmailAndPassword(authentication, email, password)
  .then((signInDetails) => {
    // if current user has created an account, sign them in.
    const existingUser = signInDetails.user;
  })
  .catch((error) => {
    // if the user has not created an account, direct them to create one.
    const errorCode = error.code;
    const errorMessage = error.message;
  });

// For the email verification

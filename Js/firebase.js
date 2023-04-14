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
const firebaseConfig = {
  apiKey: "AIzaSyBNVTxjCatZxSiZhc5HY8Gr64lBMlb9fiA",
  authDomain: "liquidmoni-project-3d474.firebaseapp.com",
  projectId: "liquidmoni-project-3d474",
  storageBucket: "liquidmoni-project-3d474.appspot.com",
  messagingSenderId: "305360626126",
  appId: "1:305360626126:web:7f8889f18c97247a960b9f",
  measurementId: "G-0QLYZCMM04",
};

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

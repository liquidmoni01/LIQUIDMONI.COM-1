import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth2 = getAuth();

signInWithEmailAndPassword(auth2, email, passwordw)
  .then((signInDetails) => {
    const signedInUser = signInDetails.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

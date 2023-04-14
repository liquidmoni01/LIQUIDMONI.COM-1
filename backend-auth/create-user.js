import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth1 = getAuth();
createUserWithEmailAndPassword(auth1, email, password)
  .then((createdData) => {
    const userDetails = createdData.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

//   The Logic for all the data that we need

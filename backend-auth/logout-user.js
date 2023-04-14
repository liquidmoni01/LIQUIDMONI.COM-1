// Sign Out User - When user wants to logout.
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const auth3 = getAuth();

signOut(auth3)
  .then(() => {
    // display to the user, that they have signed out.
  })
  .catch(() => {
    // if there's an error, print the error to them on a screen, in the form of a modal.
  });

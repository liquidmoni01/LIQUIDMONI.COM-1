// THIS IS FOR THOSE WHO SIGN UP ON THE HOMEPAGE WITH ONLY EMAIL INPUT.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { homePageFormSubmitButton } from "../Js/forms";

const notifyauth = getAuth();

const homePageEmailAddressInput = document.querySelector(
  ".form__fieldset__email-input"
);

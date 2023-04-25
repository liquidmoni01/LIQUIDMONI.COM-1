const supportForm = document.querySelector(".support__form");

const firebaseConfig = {
  apiKey: "AIzaSyCEyEZjXsiAo60dcNRvwWZgUK9v567Wq4A",
  authDomain: "liquidmoni-backend.firebaseapp.com",
  databaseURL: "https://liquidmoni-backend-default-rtdb.firebaseio.com",
  projectId: "liquidmoni-backend",
  storageBucket: "liquidmoni-backend.appspot.com",
  messagingSenderId: "167765509992",
  appId: "1:167765509992:web:4547c0a49a0ce92b2478dd",
  measurementId: "G-RYZRVYEXWZ",
};

// Object is coming from the cdn
firebase.initializeApp(firebaseConfig);

// make reference to firebase database
const supportFormDB = firebase.database().ref("support-form");

let getInputVal = (id) => {
  return document.getElementById(id).value;
};

let storeMessages = (name, email, message) => {
  let supportFormData = contactFormDB.push();

  supportFormData.set({
    userName: name,
    userEmail: email,
    userMessage: message,
  });
};
let submitForm = (e) => {
  e.preventDefault();
  //   store into the database
  let nameValue = getInputVal("username");
  let emailValue = getInputVal("email");
  let messageContent = getInputVal("message");

  storeMessages(nameValue, emailValue, messageContent);

  setTimeout(() => {
    document.querySelector(".alert").style.display = "block";
  }, 1500);
};

supportForm.addEventListener("submit", submitForm);

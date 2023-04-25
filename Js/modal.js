// support and log in modal.
// const login = document.querySelector(".log-in-modal");
// const loginButton = document.querySelector(".log-in__submit-button");
// const loginCloseButton = document.querySelector(".log-in__close");

const support = document.querySelector(".support__modal");
const supportButton = document.querySelector(".support__button");
const supportCloseButton = document.querySelector(".support__close");

let openModal = (modal, closeButton) => {
  modal.classList.remove("hidden");

  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
};

supportButton.addEventListener("click", openModal(support, supportCloseButton));
// loginButton.addEventListener("click", openModal(login));

// sending of message to the database
// const supportForm = document.getElementById("support__form");

// const firebaseConfig = {
//   apiKey: "AIzaSyCEyEZjXsiAo60dcNRvwWZgUK9v567Wq4A",
//   authDomain: "liquidmoni-backend.firebaseapp.com",
//   databaseURL: "https://liquidmoni-backend-default-rtdb.firebaseio.com",
//   projectId: "liquidmoni-backend",
//   storageBucket: "liquidmoni-backend.appspot.com",
//   messagingSenderId: "167765509992",
//   appId: "1:167765509992:web:4547c0a49a0ce92b2478dd",
//   measurementId: "G-RYZRVYEXWZ",
// };

// // Object is coming from the cdn
// firebase.initializeApp(firebaseConfig);

// // make reference to firebase database
// const contactFormDB = firebase.database().ref("support-form");

// contactForm.addEventListener("submit", submitForm);

// let getInputVal = (id) => {
//   return document.getElementById(id).value;
// };

// let storeMessages = (name, email, message) => {
//   let contactFormData = contactFormDB.push();

//   contactFormData.set({
//     userName: name,
//     userEmail: email,
//     userMessage: message,
//   });
// };

// let submitForm = (e) => {
//   e.preventDefault();
//   //   store into the database
//   let nameValue = getInputVal("username");
//   let emailValue = getInputVal("email");
//   let messageContent = getInputVal("message");

//   storeMessages(nameValue, emailValue, messageContent);

//   setTimeout(() => {
//     document.querySelector(".alert").style.display = block;
//   }, 1500);
// };

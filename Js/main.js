// support and log in modal.
const login = document.querySelector(".log-in-modal");
const loginButton = document.querySelector(".log-in__submit-button");
const loginCloseButton = document.querySelector(".log-in__close");

const support = document.querySelector(".support__modal");
const supportButton = document.querySelector(".support__button");
const supportCloseButton = document.querySelector(".support__close");

let openModal = (modal, closeButton) => {
  modal.classList.remove("hidden");

  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
};

supportButton.addEventListener("click", openModal(support));
loginButton.addEventListener("click", openModal(login));

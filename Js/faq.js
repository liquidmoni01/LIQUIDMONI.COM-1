// Logic for the accordion
const openButton = document.querySelectorAll("[data-faq-open]");
const closeButton = document.querySelectorAll("[data-faq-close]");

let handleFaq = (button) => {
  if (button) {
    openAccordion(button);
  } else if (button in closeButton) {
    // closeAccordion();
  }
};

// closeButton.classList.add("hidden");
// const accordionButtons = document.querySelector("[data-faq-button]");
openButton.forEach((button) => {
  button.addEventListener("click", handleFaq);
});

closeButton.forEach((button) => {
  button.addEventListener("click", handleFaq);
  handleFaq();
});

let openAccordion = (button) => {
  console.log("Hello");
  button.parentElement;
};

let closeAccordion = (button, index) => {};

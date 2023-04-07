// Logic for the accordion
// const openButton = document.querySelectorAll("[data-faq-open]");
// const closeButton = document.querySelectorAll("[data-faq-close]");

// let handleFaq = (button) => {
//   if (button) {
//     openAccordion(button);
//   } else if (button in closeButton) {
//     // closeAccordion();
//   }
// };

// // closeButton.classList.add("hidden");
// // const accordionButtons = document.querySelector("[data-faq-button]");
// openButton.forEach((button) => {
//   button.addEventListener("click", handleFaq);
// });

// closeButton.forEach((button) => {
//   button.addEventListener("click", handleFaq);
//   handleFaq();
// });

// let openAccordion = (button) => {
//   console.log("Hello");
//   button.parentElement;
// };

// let closeAccordion = (button, index) => {};

// Accordion
const items = document.querySelectorAll(".Faq__accordion-button");

let toggleAccordion = () => {
  const itemToggle = this.getAttribute("aria-expanded");

  // items.forEach((item) => {
  //   item.setAttribute("aria-expanded", "false");
  // });
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
};

items.forEach((item) => item.addEventListener("click", toggleAccordion));

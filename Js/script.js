// Support Modal

// WORK ON THE DROPDOWN LOGIC

// Hero Section Currency Converter.
let countryData = [
  {
    name: "NGA",
    image: "../images/hero/nigeria.svg",
  },
  {
    name: "USA",
    image: "../images/hero/usa.svg",
  },
  {
    name: "CAN",
    image: "../images/hero/canada.svg",
  },
  {
    name: "BEL",
    image: "../images/hero/belgium.svg",
  },
  {
    name: "FRA",
    image: "../images/hero/france.svg",
  },
  {
    name: "GBR",
    image: "../images/hero/great-britain.svg",
  },
  {
    name: "ESP",
    image: "../images/hero/spain.svg",
  },
];

const sendInput = document.getElementsByClassName("hero__phone-input")[0];
const getInput = document.getElementsByClassName("hero__phone-input")[1];
const dropdown = document.querySelector(".hero__phone-dropdown");
// const dropdownItems = Array.from(dropdown.children);
const dropdownBtn = document.querySelector(".hero__phone__dropdown-btn");
const countryName = (document.querySelector(
  ".hero__phone-country-name"
).innerText = countryData[1].name);
const countryImage = (document.querySelector(".hero__phone-country-image").src =
  countryData[1].image);
const heroPhoneButton = document.querySelector(".hero__button");

// eventListeners.
// dropdownBtn.addEventListener("click", () => handleDropdown);

// selection process
let handleDropdown = () => handleSelection;

// select country
let handleSelection = () => {
  dropdown.classList.remove("hidden");
  // dropdown.setAttribute("aria-expanded", true);
  dropdownItems.map((country) => {
    country.addEventListener("click", () => {
      console.log();
      console.log(country[0].children[1]);

      countryData.map((data) => {
        if (country[0].children[0].children[0].src === data.image) {
          country[0].children[0].children[0].src === data.image;
        }
        if (country[0].children[1].innerText === data.name) {
          country[0].children[0].children[0].src === data.image;
        }
      });
    });
  });
};

// conversion process
sendInput.addEventListener("keyup", (e) => {
  let sendVal = e.target.value;
  // convertVal(sendVal);
  console.log(sendVal);
  let dollarsToNaira = sendVal * 459;
  getInput.inertext = dollarsToNaira.toString();
});

let convertVal = (val) => {
  // convert the inputted value to the selected country, and display converted value to the user.
  let dollarsToNaira = val * 459;
  getInput.inertext = dollarsToNaira;
};

heroPhoneButton.addEventListener("click", (e) => e.preventDefault());

// Webhook for the contact page.
// {
//   "form__data": {
//     "name": "Liquid"
//   }
// }

// THE SUPPORT MODAL FOR ALL PAGES, WHEN WE CLICK THE SUPPORT BUTTON

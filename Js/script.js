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
// const countryName = (document.querySelector(".hero__phone-country-name").innerText = countryData[1].name);
// const countryImage = (document.querySelector(".hero__phone-country-image").src =
// countryData[1].image);

// eventListeners.
// dropdownBtn.addEventListener("click", () => handleDropdown);

// selection process
let handleDropdown = () => handleSelection;

// select country
// let handleSelection = () => {
//   dropdown.classList.remove("hidden");
//   // dropdown.setAttribute("aria-expanded", true);
//   dropdownItems.map((country) => {
//     country.addEventListener("click", () => {
//       console.log();
//       console.log(country[0].children[1]);

//       countryData.map((data) => {
//         if (country[0].children[0].children[0].src === data.image) {
//           country[0].children[0].children[0].src === data.image;
//         }
//         if (country[0].children[1].innerText === data.name) {
//           country[0].children[0].children[0].src === data.image;
//         }
//       });
//     });
//   });
// };

// conversion process
// sendInput.addEventListener("keyup", (e) => {
//   let sendVal = e.target.value;
//   console.log(sendVal);
// });

let convertVal = (e) => {
  // convert the inputted value to the selected country, and display converted value to the user.
};

// THE SUPPORT MODAL FOR ALL PAGES, WHEN WE CLICK THE SUPPORT BUTTON
// let supportModal = () => {
//   "
//   <div class="support__modal">
//             <section class="support">
//                 <h2 class="support__header">Support us</h2>
//                 <form action="" class="support__form">
//                     <section class="support__form-action">
//                         <input type="hidden" name="_captcha" value="false">
//                         <!-- Detail inputs -->
//                         <input type="hidden" name="_subject" value="new sign in">
//                         <!-- Change deployment url. -->
//                         <!-- <input type="hidden" name="_next" value="https://jailbreak-101.github.io/LIQUIDMONI.COM/thank-you.html"> -->
//                         <input type="hidden" name="_next" value="">

//                         <fieldset class="support__form-field">
//                             <label class="support__form-label" for="username">Name: </label>
//                             <div class="support__form-input-container">
//                                 <input type="text" class="support__form-input" id="username" name="username"
//                                     placeholder="Name" required>
//                             </div>
//                         </fieldset>

//                         <fieldset class="support__form-field">
//                             <label class="support__form-label" for="email">Email: </label>
//                             <div class="support__form-input-container">
//                                 <input type="email" class="support__form-input" id="email" name="user-email"
//                                     placeholder="Email" required>
//                             </div>
//                         </fieldset>

//                         <textarea class="support__form-input support__form-textarea" name="user-message" id="message"
//                             cols="41" rows="10" placeholder="Message" required></textarea>

//                         <button type="submit" class="support__button">Submit</button>

//                         <p class="support__link">You can also support us by emailing<a href="" class="link">
//                                 Support@liquidmoni.com</a></p>
//                     </section>
//                 </form>
//             </section>
//         </div>")
// }

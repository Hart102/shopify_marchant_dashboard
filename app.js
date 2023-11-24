const selector = (element) => document.querySelector(element);
const selectAll = (element) => document.querySelectorAll(element);

const menu_btn = selector(".menu_btn");
const menu = selector(".menu");
const openModelBtn = selector(".open-model-btn");
const cardContainer = selector(".card-container");

const toggleFunction = (element, className) => {
  if ((element, className)) {
    element.classList.toggle(className);
  }
};

// Open and close menu functionality
menu_btn.addEventListener("click", () => toggleFunction(menu, "hidden"));

// Open and close cards
openModelBtn.addEventListener("click", () => {
  toggleFunction(cardContainer, "open-model");
  toggleFunction(openModelBtn, "rotate");
});

const cardObject = [
  {
    id: 1,
    title: "Customize your online store",
    description:
      "Choose the theme and add your logo, colors and images to reflect your brand.",
    href: "Learn more",
    btn_1: "Customize theme",
    btn_2: "",
    img: "https://crushingit.tech/hackathon-assets/customise-store.png",
  },
  {
    id: 2,
    title: "Add your first product",
    description:
      "Write a description and add photos, and set pricing for the products you plan to sell.",
    href: "Learn more",
    btn_1: "Add products",
    btn_2: "Import product",
    img: "https://crushingit.tech/hackathon-assets/product.png",
  },
  {
    id: 3,
    title: "Add a custom domain",
    description:
      "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
    href: "Learn more",
    btn_1: "Add domain",
    btn_2: "",
    img: "https://crushingit.tech/hackathon-assets/website.png",
  },
  {
    id: 4,
    title: "Name your store",
    description:
      "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.",
    href: "Learn more",
    btn_1: "Name store",
    btn_2: "",
    img: "https://crushingit.tech/hackathon-assets/name-store.png",
  },
  {
    id: 5,
    title: "Set up a payment provider",
    description:
      "Chooose a payment provider to start accepting payments. you'll need to create an account with the payment provider and set it up with your shopify store.",
    href: "Learn more",
    btn_1: "Set up payment",
    btn_2: "",
    img: "https://crushingit.tech/hackathon-assets/payment.png",
  },
];

// Card Design template
const card_template = (data) => {
  if (data) {
    return `
        <ul class="content-card">
          <li>
            <label for="${data.id}" class="flex-item">
              <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                class="not-selected"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="12"
                  stroke="#656266"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="4 6"
                />
              </svg>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 28 28"
                  fill="none"
                  class="spinner hidden"
                >
                  <path
                    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
                    stroke="#656266"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="selected hidden"
                >
                  <circle cx="12" cy="12" r="10" fill="#303030"></circle>
                  <path
                    d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              
              <p class="title">${data.title}</p>
            </label>
            <input type="radio" name="option" class="radio" id="${data.id}" />
            <div class="option justify-between">
              <div>
                <div class="description">
                  <p>${data.description}</p>
                  <a href="#">${data.href}</a>
                </div>
                <div class="cta flex-item">
                  <button>${data.btn_1}</button>
                  <button>${data.btn_2}</button>
                </div>
              </div>
              <div>
                <img class="product-image" src="${data.img}" />
              </div>
            </div>
          </li>
        </ul>`;
  }
};

// Load cards in the broswer
cardObject.map(
  (card) => (selector(".card-container").innerHTML += card_template(card))
);

const cardContent = selectAll(".content-card");
const radioBtn = selectAll(".radio");

const NotSelected = selectAll(".not-selected");
const spinner = selectAll(".spinner");
const selected = selectAll(".selected");

// Add bacground to selected option
cardContent.forEach((card, cardIndex) =>
  radioBtn.forEach((btn, btnIndex) => {
    // Indicate selected option
    btn.addEventListener("click", () => {
      if (cardIndex == btnIndex) {
        card.classList.toggle("bg");
      } else {
        card.classList.remove("bg");
      }
    });
  })
);

// Add and Remove Selected Icon Functionality
for (let i = 0; i < NotSelected.length; ) {
  let index = 0;
  let progress_level = 20;
  // Add selected Icon functionality
  NotSelected[i].addEventListener("click", () => {
    index = i - 1;
    NotSelected[index].classList.add("hidden");
    spinner[index].classList.remove("hidden");
    progress_level += progress_level;

    setTimeout(() => {
      spinner[index].classList.add("hidden");
      selected[index].classList.remove("hidden");
    }, 300);
  });

  // Remove selected Icon functionality
  selected[i].addEventListener("click", () => {
    index = i - 1;
    NotSelected[index].classList.remove("hidden");
    selected[index].classList.add("hidden");
  });
  i++;
}

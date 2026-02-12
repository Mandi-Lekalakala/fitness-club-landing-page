function nextPage() {
  window.open(
    "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389",
    "_blank",
  );
}
let clickButton = document.getElementById("linkButton");
clickButton.addEventListener("click", nextPage);

function scrollToSection() {
  document
    .getElementById("targetSection")
    .scrollIntoView({ behavior: "smooth" });
}
let scrollButton = document.getElementById("scrollButton");
scrollButton.addEventListener("click", scrollToSection);

function contactUs() {
  let firstName = prompt("What is your name?");
  let secondName = prompt("What is your surname?");
  alert(
    "Great! " + firstName + " " + secondName + ", we will contact you soon.😊",
  );
}

let contactButton = document.getElementById("contactUsLink");
contactButton.addEventListener("click", contactUs);

function changeTheme() {
  let navBar = document.querySelector(".navbar");
  navBar.classList.add("dark-theme");
  let heading = document.querySelector("h1");
  heading.classList.add("dark-heading");
  let center = document.querySelector(".center1");
  center.classList.add("dark-center");

  let joining = document.querySelector(".join");
  joining.classList.add("join-button");
  let color = document.querySelector(".centered");
  color.classList.add("light-centered");
  let heading2 = document.querySelector("h2");
  heading2.classList.add("dark-h2");
  let paraGraph = document.querySelector(".paragraph");
  paraGraph.classList.add("dark-paragraph");
  let paragraph = document.querySelector(".paragraph2");
  paragraph.classList.add("dark-paragraph");
  let contact = document.querySelector(".contact-us");
  contact.classList.add("dark-contactUs");
  let conTact = document.querySelector(".contact-us2");
  conTact.classList.add("dark-contactUs");
  let lastHeading = document.querySelector("footer");
  lastHeading.classList.add("dark-footer");
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

let isDarkTheme = false;

function changeTheme() {
  let navBar = document.querySelector(".navbar");
  let heading = document.querySelector("h1");
  let center = document.querySelector(".center1");
  let joining = document.querySelector(".join");
  let color = document.querySelector(".centered");
  let heading2 = document.querySelector("h2");
  let paraGraph = document.querySelector(".paragraph");
  let paragraph = document.querySelector(".paragraph2");
  let contact = document.querySelector(".contact-us");
  let conTact = document.querySelector(".contact-us2");
  let lastHeading = document.querySelector("footer");

  if (isDarkTheme) {
    navBar.classList.remove("dark-theme");
    heading.classList.remove("dark-heading");
    center.classList.remove("dark-center");
    joining.classList.remove("join-button");
    color.classList.remove("light-centered");
    heading2.classList.remove("dark-h2");
    paraGraph.classList.remove("dark-paragraph");
    paragraph.classList.remove("dark-paragraph");
    contact.classList.remove("dark-contactUs");
    conTact.classList.remove("dark-contactUs");
    lastHeading.classList.remove("dark-footer");
  } else {
    navBar.classList.add("dark-theme");
    heading.classList.add("dark-heading");
    center.classList.add("dark-center");
    joining.classList.add("join-button");
    color.classList.add("light-centered");
    heading2.classList.add("dark-h2");
    paraGraph.classList.add("dark-paragraph");
    paragraph.classList.add("dark-paragraph");
    contact.classList.add("dark-contactUs");
    conTact.classList.add("dark-contactUs");
    lastHeading.classList.add("dark-footer");
  }
  isDarkTheme = !isDarkTheme;
}

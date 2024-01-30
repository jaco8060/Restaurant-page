import { contactDomController } from "./contactDom";
import { homeDomController } from "./homeDom";
import { menuDomController } from "./menu";
import "./style.css";
console.log("Webpack initialized!");

homeDomController.Home();

// contactDomController.Contact();
const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

homeBtn.addEventListener("click", tabSwitch);
menuBtn.addEventListener("click", tabSwitch);
contactBtn.addEventListener("click", tabSwitch);

function tabSwitch(e) {
  //reset colors
  homeBtn.style.backgroundColor = "var(--button-color)";
  menuBtn.style.backgroundColor = "var(--button-color)";
  contactBtn.style.backgroundColor = "var(--button-color)";

  //color currently selected
  e.target.style.backgroundColor = "var(--button-color-selected)";
  if (e.target.textContent === "Home") {
    clearTab();
    homeDomController.Home();
  } else if (e.target.textContent === "Menu") {
    clearTab();
    menuDomController.Menu();
  } else if (e.target.textContent === "Contact") {
    clearTab();
    contactDomController.Contact();
  }
}

function clearTab() {
  content.innerHTML = "";
}

"use strict";

import loadhomepage from "./homepage.js";

function createHeader() {
  const header = document.createElement("header");
  const restName = document.createElement("h1");
  const btnsDiv = document.createElement("div");
  btnsDiv.classList.add("headerBtnsDiv");

  restName.textContent = "Zaikedaar Biryani";
  header.appendChild(restName);
  header.appendChild(btnsDiv);

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.classList.add("homeBtn");
  homeButton.classList.add("navSelector");

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.classList.add("menuBtn");

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.classList.add("contactBtn");

  btnsDiv.appendChild(homeButton);
  btnsDiv.appendChild(menuButton);
  btnsDiv.appendChild(contactButton);

  return header;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.setAttribute("id", "footer");

  const footerText = document.createElement("p");
  footerText.textContent = "Copyright ©️ Zaikedaar Biryani, Made with Love 💖";

  footer.appendChild(footerText);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  loadhomepage();
}

export default initializeWebsite;

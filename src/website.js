"use strict";

import loadhomepage from "./homepage.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  const restName = document.createElement("h1");
  const btnsDiv = document.createElement("div");
  btnsDiv.classList.add("headerBtnsDiv");

  restName.textContent = "Zaikedaar Biryani";
  header.appendChild(restName);
  header.appendChild(btnsDiv);

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.classList.add("homeBtn");
  homeButton.classList.add("headerbtn");
  homeButton.classList.add("active");

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.classList.add("menuBtn");
  menuButton.classList.add("headerbtn");

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.classList.add("contactBtn");
  contactButton.classList.add("headerbtn");

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

function loadSelectedPage() {
  let selectedPage;

  const homeBtn = document.querySelector(".homeBtn");
  const menuBtn = document.querySelector(".menuBtn");
  const contactBtn = document.querySelector(".contactBtn");

  const headerBtns = Array.from(document.querySelectorAll(".headerbtn"));
  headerBtns.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (e.target.classList.contains("homeBtn")) {
        selectedPage = loadhomepage();
        homeBtn.classList.add("active");
        menuBtn.classList.remove("active");
        contactBtn.classList.remove("active");
      } else if (e.target.classList.contains("menuBtn")) {
        selectedPage = loadMenu();
        menuBtn.classList.add("active");
        homeBtn.classList.remove("active");
        contactBtn.classList.remove("active");
      } else if (e.target.classList.contains("contactBtn")) {
        selectedPage = loadContact();
        contactBtn.classList.add("active");
        homeBtn.classList.remove("active");
        menuBtn.classList.remove("active");
      }
    });

    return selectedPage;
  });
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  loadhomepage();
  loadSelectedPage();
}

export default initializeWebsite;

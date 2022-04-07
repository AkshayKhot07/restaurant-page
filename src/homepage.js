"use strict";

function homepageContent() {
  const homeMainContainer = document.createElement("div");
  homeMainContainer.classList.add("home-main-container");
  homeMainContainer.setAttribute("id", "home-main-container");

  const homeImgDiv = document.createElement("div");
  homeImgDiv.classList.add("home-image");
  homeImgDiv.setAttribute("id", "home-image");

  const homeImgEl = document.createElement("img");
  homeImgEl.src = `images/homecover.png`;
  homeImgDiv.appendChild(homeImgEl);

  const homeContentDiv = document.createElement("div");
  homeContentDiv.classList.add("home-content");
  homeContentDiv.setAttribute("id", "home-content");

  const homeContentP = document.createElement("p");
  var newline = "\r\n";
  var nbsp = "\u00a0";
  homeContentP.textContent =
    "Wide range of biryanis to choose from, which tantalizes your taste buds and satisfies you in all possible ways 😻" +
    newline +
    "Tender seekh kebabs, lamp chops that just melts in your mouth and smoothly slides in your tummy 🍖" +
    newline +
    "Multicolor fluffy long grained rice which awakens your senses and makes you feel all alive 🍚" +
    newline +
    "A true haven for meat lovers 🤸‍♂️💝";
  homeContentDiv.appendChild(homeContentP);

  homeMainContainer.appendChild(homeImgDiv);
  homeMainContainer.appendChild(homeContentDiv);

  return homeMainContainer;
}

function loadhomepage() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(homepageContent());
}

export default loadhomepage;

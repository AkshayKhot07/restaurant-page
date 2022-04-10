"use strict";

function homepageContent() {
  const homeMainContainer = document.createElement("div");
  homeMainContainer.classList.add("home-main-container");
  homeMainContainer.setAttribute("id", "home-main-container");

  const homeImgDiv1 = document.createElement("div");
  homeImgDiv1.classList.add("home-image");
  homeImgDiv1.setAttribute("id", "home-image1");

  const homeImgEl1 = document.createElement("img");
  homeImgEl1.src = `images/homecover1.png`;
  homeImgDiv1.appendChild(homeImgEl1);

  const homeImgDiv2 = document.createElement("div");
  homeImgDiv2.classList.add("home-image");
  homeImgDiv2.setAttribute("id", "home-image2");

  const homeImgEl2 = document.createElement("img");
  homeImgEl2.src = `images/homecover2.png`;
  homeImgDiv2.appendChild(homeImgEl2);

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

  homeMainContainer.appendChild(homeImgDiv1);
  homeMainContainer.appendChild(homeImgDiv2);
  homeMainContainer.appendChild(homeContentDiv);

  return homeMainContainer;
}

function loadhomepage() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(homepageContent());
}

export default loadhomepage;

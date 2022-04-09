"use strict";

function createContact() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add(".contact-container");

  const contactDetails = document.createElement("div");
  contactDetails.classList.add("contact-details");

  const contactHtml = `
  <div class="contact-html">
  <p class="contactPhoneNumber">${"📞"} 8888-9087-10</p>
  <p class="contactAddress">${"🏡"} Bollywood Hadda 98, Mumbai, India</p>
  <img src=${"images/map.PNG"} class="contactImage"> 
  </div>
  `;

  contactDetails.innerHTML += contactHtml;
  contactContainer.appendChild(contactDetails);

  return contactContainer;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;

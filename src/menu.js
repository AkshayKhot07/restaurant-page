"use strict";

const menuItems = [
  {
    name: "Chicken Malai Seekh Biryani",
    text: "Tendour Seekh kebabs served with fluffy malai rice and raita",
    img: "images/menu-item-1.jpg",
  },
  {
    name: "Chicken Tikka Biryani",
    text: "Delicious chicken tikka mixed with basmati rice and raita",
    img: "images/menu-item-2.jpg",
  },
  {
    name: "Chicken Dum Biryani",
    text: "Slow cooked biryani with tender chicken pieces served with raita",
    img: "images/menu-item-3.jpg",
  },
  {
    name: "Chicken Egg Biryani",
    text: "Egglicious biryani for our eggitarinas",
    img: "images/menu-item-4.jpg",
  },
  {
    name: "Chicken Kolkata Biryani",
    text: "Peppery chicken biryani served with raita",
    img: "images/menu-item-5.jpg",
  },
  {
    name: "Chicken Tandoori Biryani",
    text: "Our speical chicken tandoori biryani served with raita",
    img: "images/menu-item-6.jpg",
  },
];

function createMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");
  menuContainer.setAttribute("id", "menuContainer");

  let menuList = document.createElement("div");
  menuList.classList.add("menuList");
  menuList.setAttribute("id", "menuList");

  //Menu Item
  menuItems.forEach((obj) => {
    let menuItem = `
        <div class="menuItem">
         <img src=${obj.img} class="itemImage"/>
         <h4 class="itemName">${obj.name}</h4>
         <i class="itemDesp">${obj.text}</i>
         </div>
         `;

    menuList.innerHTML += menuItem;
  });

  menuContainer.appendChild(menuList);

  return menuContainer;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;

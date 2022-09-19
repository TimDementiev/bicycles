const menuContainer = document.querySelector(".container_type_dropdownmenu"),
  purposeLink = document.getElementById("header-dropdownmenu-purpose-link"),
  bicyclesLink = document.getElementById("header-dropdownmenu-bicycles-link"),
  trainingsLink = document.getElementById("header-dropdownmenu-trainings-link"),
  gearButton = document.querySelector(".button_type_gear"),
  menuButton = document.querySelector(".button_type_menu");

function switchMenu() {
  if (getComputedStyle(menuContainer).display == "none") {
    menuContainer.style.display = "grid";
    menuButton.style.backgroundImage = "url(images/button_menu_close.svg)";
  } else {
    menuContainer.style.display = "none";
    menuButton.style.backgroundImage = "url(images/button_menu.svg)";
  }
}

function closeMenu() {
  menuContainer.style.display = "none";
  menuButton.style.backgroundImage = "url(images/button_menu.svg)";
}

gearButton.addEventListener("click", switchMenu);
menuButton.addEventListener("click", switchMenu);
purposeLink.addEventListener("click", closeMenu);
bicyclesLink.addEventListener("click", closeMenu);
trainingsLink.addEventListener("click", closeMenu);

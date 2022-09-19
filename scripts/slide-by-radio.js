const slideBar = document.querySelector(".container_type_bicycles"),
  mainRadioButton = document.querySelectorAll('input[name="radio-bicycles"]'),
  dotsRadioButton = document.querySelectorAll(
    'input[name="radio-bicycles-dots"]'
  ),
  dropdownMenuContainer = document.querySelector(".bicycles__button-container"),
  dropdownMenuButton = document.querySelector(".button_type_dropdown"),
  mobileResolution = window.matchMedia("(min-width: 1439px)");

let currentTransform = 0;

for (let i = 0; i < mainRadioButton.length; i++) {
  mainRadioButton[i].addEventListener("click", function () {
    let val = this.value;
    if (mobileResolution.matches) {
      slideBar.style.transform = `translateX(-${val * 102.5 - 102.5}%)`;
    } else {
      let transformByMainRadio = val * 330 - 330;
      slideBar.style.transform = `translateX(-${transformByMainRadio}%)`;
      dropdownMenuButton.textContent = this.nextElementSibling.textContent;
      currentTransform = transformByMainRadio;
      dotsRadioButton[0].checked = true;
      closeDropdawnMenu();
    }
  });
}

for (let i = 0; i < dotsRadioButton.length; i++) {
  dotsRadioButton[i].addEventListener("click", function () {
    let val = this.value;
    slideBar.style.transform = `translateX(-${
      val * 110 - 110 + currentTransform
    }%`;
  });
}

mobileResolution.addEventListener("change", (event) => {
  if (event.matches) {
    dropdownMenuContainer.style.display = "flex";
    mainRadioButton[0].checked = true;
    slideBar.style.transform = `translateX(0%)`;
  } else {
    dropdownMenuContainer.style.display = "none";
    mainRadioButton[0].checked = true;
    slideBar.style.transform = `translateX(0%)`;
  }
});

function openDropdawnMenu() {
  dropdownMenuContainer.style.display = "grid";
  dropdownMenuButton.style.backgroundImage =
    "url(images/button_chevron_up.svg)";
}

function closeDropdawnMenu() {
  dropdownMenuContainer.style.display = "none";
  dropdownMenuButton.style.backgroundImage =
    "url(images/button_chevron_down.svg)";
}

function handleDropdawnMenu() {
  if (mobileResolution.matches) {
    dropdownMenuContainer.style.display = "flex";
  } else {
    if (getComputedStyle(dropdownMenuContainer).display == "none") {
      openDropdawnMenu();
    } else {
      closeDropdawnMenu();
    }
  }
}

dropdownMenuButton.addEventListener("click", handleDropdawnMenu);

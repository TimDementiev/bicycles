const bigSliderNextBtn = document.querySelector(".button_type_right-arrow"),
  bigSliderPrevBtn = document.querySelector(".button_type_left-arrow"),
  sideBar = document.querySelector(".social-project__container"),
  slidesCnt = sideBar.querySelectorAll("div"),
  slideNum = document.querySelector(".social-project__slider-num"),

  smallSliderNextBtn = document.getElementById("slider-right"),
  smallSliderPrevBtn = document.getElementById("slider-left"),
  container = document.querySelector(".project-card__container"),
  slideElements = document.querySelectorAll("div");

let activeIdxForBigSlider = 0;
let activeIdxForSmallSlider = 0;

const changeSlide = (sizeDirection) => {
  switch (sizeDirection) {
    case "big-right": {
      activeIdxForBigSlider++;
      if (activeIdxForBigSlider >= slidesCnt.length) activeIdxForBigSlider = 0;
      sideBar.style.transform = `translateX(-${activeIdxForBigSlider * 110}%)`;
      slideNum.textContent = `${activeIdxForBigSlider + 1}/${slidesCnt.length}`;
      break;
    }
    case "big-left": {
      activeIdxForBigSlider--;
      if (activeIdxForBigSlider < 0) activeIdxForBigSlider = slidesCnt.length - 1;
      sideBar.style.transform = `translateX(-${activeIdxForBigSlider * 110}%)`;
      slideNum.textContent = `${activeIdxForBigSlider + 1}/${slidesCnt.length}`;
      break;
    }
    case "small-right": {
      activeIdxForSmallSlider++;
      if (activeIdxForSmallSlider >= slidesCnt.length) activeIdxForSmallSlider = 0;
      container.style.transform = `translateX(-${activeIdxForSmallSlider * 120}%)`;
      break;
    }
    case "small-left": {
      activeIdxForSmallSlider--;
      if (activeIdxForSmallSlider < 0) activeIdxForSmallSlider = slidesCnt.length - 1;
      container.style.transform = `translateX(-${activeIdxForSmallSlider * 120}%)`;
      break;
    }
  }
};

bigSliderNextBtn.addEventListener("click", () => changeSlide("big-right"));
bigSliderPrevBtn.addEventListener("click", () => changeSlide("big-left"));
smallSliderNextBtn.addEventListener("click", () => changeSlide("small-right"));
smallSliderPrevBtn.addEventListener("click", () => changeSlide("small-left"));
// const myTimer = setInterval(() => changeSlide("right"), 10000);

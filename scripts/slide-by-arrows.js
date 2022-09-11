const carousel = document.querySelector(".purpose");
const slider = carousel.querySelector(".container_type_purpose");
let slides = [...slider.children];

const lastSlide = slides[slides.length - 1];
const pre = lastSlide.cloneNode(true);
slider.prepend(pre);

const handleArrowClick = (arrow) => {
  arrow.addEventListener("click", () => {
    slides = [...slider.children];
    const currSlide = slider.querySelector(".card_visible_first");
    currSlide.classList.remove("card_visible_first");
    currSlide.nextElementSibling.classList.remove("card_visible_second");
    let targetSlide;
    if (arrow.classList.contains("button_direction_left")) {
      targetSlide = currSlide.previousElementSibling;
      slides[slides.length - 1].remove();
      slider.prepend(slides[2].cloneNode(true));
    }
    if (arrow.classList.contains("button_direction_right")) {
      targetSlide = currSlide.nextElementSibling;
      slides[0].remove();
      slider.append(slides[1].cloneNode(true));
    }
    targetSlide.classList.add("card_visible_first");
    targetSlide.nextElementSibling.classList.add("card_visible_second");
  });
};

const buttons = carousel.querySelectorAll(".button_type_arrow");
buttons.forEach(handleArrowClick);

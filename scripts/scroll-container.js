const fixedCard = document.querySelector(".card_type_intro");
const scrollTrigger = 130;

window.onscroll = function () {
  if (window.scrollY <= scrollTrigger || window.pageYOffset <= scrollTrigger) {
    fixedCard.style.top = `${347 + window.scrollY}px`;
  } else {
    fixedCard.style.top = "477px";
  }
};

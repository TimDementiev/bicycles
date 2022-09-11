const body = document.querySelector(".page");
const switchBtn = document.getElementById("lightmode-checkbox");

const darkBackgroundMainColor = "rgba(51, 51, 51, 1)";
const lightBackgroundMainColor = "rgba(244, 244, 244, 1)";

switchBtn.addEventListener("change", () => {
  if (switchBtn.checked) {
    body.style.setProperty("--backgroundMainColor", darkBackgroundMainColor);
  } else {
    body.style.setProperty("--backgroundMainColor", lightBackgroundMainColor);
  }
});

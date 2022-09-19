const body = document.querySelector(".page");
const switchBtnHeader = document.getElementById("lightmode-checkbox-header");
const switchBtnFooter = document.getElementById("lightmode-checkbox-footer");

function toggleTheme() {
  if (switchBtnHeader.checked) {
    // switchBtnFooter.checked = true;
    body.classList.add("page_dark");
  } else {
    // switchBtnFooter.checked = false;
    body.classList.remove("page_dark");
  }
  if (switchBtnFooter.checked) {
    // switchBtnHeader.checked = true;
    body.classList.add("page_dark");
  } else {
    // switchBtnHeader.checked = false;
    body.classList.remove("page_dark");
  }
}

switchBtnHeader.addEventListener("change", toggleTheme);
switchBtnFooter.addEventListener("change", toggleTheme);

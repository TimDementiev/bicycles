const sideBar = document.querySelector(".container_type_bicycles"),
  selector = document.querySelectorAll('input[name="radio-bicycles"]');

for (let i = 0; i < selector.length; i++) {
  selector[i].addEventListener("change", function () {
    let val = this.value;
    sideBar.style.transform = `translateX(-${val * 102.5 - 102.5}%)`;
  });
}

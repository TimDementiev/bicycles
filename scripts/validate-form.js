const form = document.querySelector(".form"),
  email = document.querySelector(".form__email-input"),
  submitButton = document.querySelector(".form__submit");

function validatemail(valuer) {
  var msg;
  if (valuer == "") {
    return false;
  }
  return true;
}

form.addEventListener("input", function () {
  // if (validatemail(email.value)) {
  //   submitButton.classList.add("form__submit_visible");
  // } else {
  //   submitButton.classList.remove("form__submit_visible");
  // }

  if (validatemail(email.value)) {
    submitButton.classList.add("form__submit_visible");
    console.log("flag1");
  } else {
    submitButton.classList.remove("form__submit_visible");
    console.log("flag2");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validatemail(email, email.value)) {
    submitButton.classList.remove("form__submit_visible");
    email.value = "Круто!";
  }
});

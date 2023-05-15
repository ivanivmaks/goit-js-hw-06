const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", () => {
  const length = validInput.getAttribute("data-length");

  if (validInput.value.length === Number(length)) {
    validInput.classList.add("valid");
    validInput.classList.remove("invalid");
  } else {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
  }
});

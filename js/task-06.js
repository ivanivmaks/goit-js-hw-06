const input = document.querySelector("#validation-input");

input.addEventListener("blur", checkingSymbol);

function checkingSymbol() {
  const length = input.getAttribute("data-length");

  if (input.value.length === Number(length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

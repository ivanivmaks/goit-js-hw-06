const input = document.querySelector("#validation-input");

const checkingSymbols = () => {
  const length = Number(input.dataset.length);
  const isValid = input.value.length === length;

  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
};

input.addEventListener("blur", checkingSymbols);

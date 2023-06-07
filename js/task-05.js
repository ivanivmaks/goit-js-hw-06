const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", enterName);

function enterName() {
  output.textContent = input.value === "" ? "Anonymous" : input.value;
}

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const enterName = () => {
  output.textContent = input.value === "" ? "Anonymus" : input.value;
};

input.addEventListener("input", enterName);

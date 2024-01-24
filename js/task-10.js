const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector('input[type="number"]');

function createBox(size) {
  const box = document.createElement("div");
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  boxes.appendChild(box);
}

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    createBox(size);
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

create.addEventListener("click", function () {
  createBoxes(input.value);
});
destroy.addEventListener("click", destroyBoxes);

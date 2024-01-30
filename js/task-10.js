const input = document.querySelector("input[type='number']");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBox = (size) => {
  const box = document.createElement("div");
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  boxes.appendChild(box);
};

const createBoxes = () => {
  destroyBoxes();
  let size = 30;
  for (let i = 1; i <= input.value; i += 1) {
    createBox(size);
    size += 10;
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);

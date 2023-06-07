const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", handleClick);

function handleClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

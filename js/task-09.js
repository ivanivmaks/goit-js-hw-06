const startBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");
const stopBtn = document.querySelector(".stop");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changer() {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}

startBtn.addEventListener("click", changer);

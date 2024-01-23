const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const fontChanger = () => {
  text.style.fontSize = input.value + "px";
};

input.addEventListener("input", fontChanger);

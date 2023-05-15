const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
sizeControl.addEventListener("input", (event) => {
  const fontSize = sizeControl.value;
  text.style.fontSize = fontSize + "px";
});

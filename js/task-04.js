const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

function counter() {
  value.textContent = counterValue;
}

decrement.addEventListener("click", () => {
  counterValue--;
  counter();
});

increment.addEventListener("click", () => {
  counterValue++;
  counter();
});

counter();

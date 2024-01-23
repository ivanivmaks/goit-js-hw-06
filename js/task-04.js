const value = document.querySelector("#value");
const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");

let counterValue = 0;

const decrementFunc = () => {
  counterValue--;
  value.textContent = counterValue;
};

const incrementFunc = () => {
  counterValue++;
  value.textContent = counterValue;
};

decrement.addEventListener("click", decrementFunc);
increment.addEventListener("click", incrementFunc);

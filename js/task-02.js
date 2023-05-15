const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const categoriesList = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((element) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = element;
  ingredient.classList.add("item");
  fragment.appendChild(ingredient);
  console.log(ingredient);
});

categoriesList.appendChild(fragment);

const categoriesList = document.getElementById("categories");
const items = categoriesList.children;
console.log("Number of categories:", items.length);

Array.from(items).forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const count = item.querySelectorAll("li").length;
  console.log("Category:", title);
  console.log("Elements:", count);
});

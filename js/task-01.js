const categoriesList = document.getElementById("categories");
const items = categoriesList.querySelectorAll(".item");
const num = items.length;
console.log("Number og categories:", num);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const count = item.querySelectorAll("li").length;
  console.log("Category:", title);
  console.log("Elements:", count);
});

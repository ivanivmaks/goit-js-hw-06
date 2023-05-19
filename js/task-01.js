const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);
console.log("");

categories.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
  console.log("");
});

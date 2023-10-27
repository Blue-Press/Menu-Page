const menuContainer = document.getElementById("menuContainer");
const menuButtons = document.querySelectorAll("#menuButton");

let sandwichesArray = ["Egg Sandwich", "Pancake Sandwich", "Grilled Cheese"];
let plattersArray = ["Egg Platter", "Tex-Mex Breakfast", "Cheesy Beef Platter"];
let pancakesWafflesArray = ["Pancake Stack", "Waffle House", "Syrup Boat"];

function selectMenu(selection) {
  menuContainer.innerHTML = "";
  if (selection === "Sandwiches") {
    for (item of sandwichesArray) {
      const menuItem = document.createElement("div");
      menuItem.id = "menuItem";
      menuItem.className = item;
      menuContainer.appendChild(menuItem).textContent = item;
    }
  } else if (selection === "Platters") {
    for (item of plattersArray) {
      const menuItem = document.createElement("div");
      menuItem.id = "menuItem";
      menuItem.className = item;
      menuContainer.appendChild(menuItem).textContent = item;
    }
  } else if (selection === "Pancakes & Waffles") {
    for (item of pancakesWafflesArray) {
      const menuItem = document.createElement("div");
      menuItem.id = "menuItem";
      menuItem.className = item;
      menuContainer.appendChild(menuItem).textContent = item;
    }
  }
}
let selectedMenu = "Platters";
selectMenu(selectedMenu);

for (button of menuButtons) {
  button.addEventListener("click", function () {
    selectedMenu = this.textContent;
    selectMenu(selectedMenu);
  });
}

const menuContainer = document.getElementById("menuRowContainer");
const menuButtons = document.querySelectorAll("#menuButton");

let sandwichesArray = ["eggSandwich", "pancakeSandwich", "grilledCheese"];
let plattersArray = ["eggPlatter", "texmexBreakfast", "cheesyBeefPlatter"];
let pancakesWafflesArray = ["pancakeStack", "waffleHouse", "syrupBoat"];

const imageMap = {
  eggSandwich: "assets/images/sandwiches/EggSandwich.jpeg",
  pancakeSandwich: "assets/images/sandwiches/PancakeSandwich.jpeg",
  grilledCheese: "assets/images/sandwiches/GrilledCheese.jpeg",
  eggPlatter: "assets/images/platters/eggPlatter.jpeg",
  texmexBreakfast: "assets/images/platters/texmexBreakfast.jpeg",
  cheesyBeefPlatter: "assets/images/platters/cheesyBeefPlatter.jpeg",
  pancakeStack: "assets/images/pancakesWaffles/pancakeStack.jpeg",
  waffleHouse: "assets/images/pancakesWaffles/waffleHouse.jpeg",
  syrupBoat: "assets/images/pancakesWaffles/syrupBoat.jpeg",
};

const titleMap = {
  eggSandwich: "Egg Sandwich",
  pancakeSandwich: "Pancake Sandwich",
  grilledCheese: "Grilled Cheese",
  eggPlatter: "Egg Platter",
  texmexBreakfast: "Tex-Mex Breakfast",
  cheesyBeefPlatter: "Cheesy Beef Platter",
  pancakeStack: "Pancake Stack",
  waffleHouse: "Waffle House",
  syrupBoat: "Syrup Boat",
};

const descriptionMap = {
  eggSandwich: "The classic Egg Sandwich served with bacon, fresh tomato, onion, lettuce and american cheese.",
  pancakeSandwich: "Cold cut ham, american cheese and lettuce, sandwiched between two layers of pancakes.",
  grilledCheese: "The American classic, Grilled Cheese. Now made with mostly real cheese.",
  eggPlatter: "Fried eggs, scrambled eggs and sausage.",
  texmexBreakfast: "Spicy habanero sausage, fried egg, black beans and side of salsa, guacamole and sour cream.",
  cheesyBeefPlatter: "A colossal stack of beef, covered with melted cheese and fried eggs. Served wih sides of onion rings, veggies and more cheese.",
  pancakeStack: "A stack of fluffy buttered pancakes, served with syrup.",
  waffleHouse: "A house made of waffles and covered in powdered sugar, can you guess which furniture is edible?",
  syrupBoat: "A boat of waffles floating in a bowl of syrup, great for dunking!",
};

function selectMenu(selection) {
  menuContainer.innerHTML = "";

  const menuArrays = {
    Sandwiches: sandwichesArray,
    Platters: plattersArray,
    "Pancakes & Waffles": pancakesWafflesArray,
  };

  const menuArray = menuArrays[selection];

  if (menuArray) {
    menuArray.forEach((item) => {
      const menuItemContainer = document.createElement("div");
      menuItemContainer.id = "menuItemContainer";

      const itemTitle = document.createElement("p");
      itemTitle.textContent = titleMap[item];

      const menuItem = document.createElement("div");
      menuItem.id = "menuItem";
      menuItem.className = item;
      menuItem.style.backgroundImage = `url(${imageMap[item]})`;
      menuItem.style.backgroundSize = "contain";

      const itemDescription = document.createElement("p");
      itemDescription.textContent = descriptionMap[item];

      menuItemContainer.appendChild(itemTitle);
      menuItemContainer.appendChild(menuItem);
      menuItemContainer.appendChild(itemDescription);
      menuContainer.appendChild(menuItemContainer);

    });
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

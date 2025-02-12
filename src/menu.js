export default function createMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.classList.add("menus");
  const foodMenu = document.createElement("div");
  const wineMenu = document.createElement("div");

  foodMenu.setAttribute("id", "food-menu");
  wineMenu.setAttribute("id", "wine-menu");
  //   menu.textContent = "Menu";

  content.appendChild(foodMenu);
  content.appendChild(wineMenu);

  createFood();
  createWines();
}

function createFood() {
  const foods = {
    herdaz: {
      nationality: "Herdaz",
      food: "Chouta",
      description:
        "Meatballs made with undefinable fried meat, covered in gravy, and wrapped in a thick, corn bread",
      price: "9",
    },
    horneaters: {
      nationality: "Horneaters",
      food: "Stew",
      description: "Thick stew with crab legs, vegetables, and spices",
      price: "10",
    },
    alethkar: {
      nationality: "Alethkar",
      food: "Whitespine Steak",
      description: "Rare steak featured with spicy or sweet flavors",
      price: "20",
    },
  };
  const foodMenu = document.getElementById("food-menu");
  // make a div for each key, text content is the value
  for (const [key, value] of Object.entries(foods)) {
    let nationalityDesc = document.createElement("div");
    let foodDesc = document.createElement("div");
    let longDesc = document.createElement("div");
    let priceDesc = document.createElement("div");
    for (const [k, v] of Object.entries(value)) {
      switch (k) {
        case "nationality":
          nationalityDesc.classList.add(k);
          nationalityDesc.setAttribute("id", v);
          nationalityDesc.textContent = v;
          foodMenu.appendChild(nationalityDesc);
          break;
        case "food":
          foodDesc.classList.add(k);
          foodDesc.textContent = v;
          nationalityDesc.appendChild(foodDesc);
          break;
        case "description":
          longDesc.classList.add(k);
          longDesc.textContent = v;
          foodDesc.appendChild(longDesc);
          break;
        case "price":
          priceDesc.classList.add(k);
          priceDesc.textContent = v;
          foodDesc.appendChild(priceDesc);
          break;
      }
    }
  }
}

function createWines() {
  const wines = {
    pink: {
      color: "Pink",
      strength: "Weak",
      description: "Floral aids alertness",
      price: "10",
    },
    orange: {
      color: "Orange",
      strength: "Weak",
      description: "Fruity with notes of ginger",
      price: "10",
    },

    yellow: {
      color: "Yellow",
      strength: "Moderately Weak",
      description: "Bold and deep without guilt",
      price: "10",
    },

    auburn: {
      color: "Auburn",
      strength: "Moderate",
      description: "Spicy taste with an earthy aroma",
      price: "10",
    },

    red: {
      color: "Red",
      strength: "Moderate",
      description: "Flavorful with a pleasant burn",
      price: "10",
    },

    sapphire: {
      color: "Sapphire",
      strength: "Moderately Strong",
      description: "Nutty taste with hints of honey",
      price: "10",
    },

    blue: {
      color: "Blue",
      strength: "Strong",
      description: "Complex notes of berry and lemon",
      price: "10",
    },

    purple: {
      color: "Purple",
      strength: "Strong",
      description: "Spices sandalwood aroma",
    },
  };
  const wineMenu = document.getElementById("wine-menu");
  // make a div for each key, text content is the value
  for (const [key, value] of Object.entries(wines)) {
    let colorDesc = document.createElement("div");
    let strengthDesc = document.createElement("div");
    let longDesc = document.createElement("div");
    let priceDesc = document.createElement("div");
    for (const [k, v] of Object.entries(value)) {
      switch (k) {
        case "color":
          colorDesc.classList.add(k);
          colorDesc.setAttribute("id", v);
          colorDesc.textContent = v;
          wineMenu.appendChild(colorDesc);
          break;
        case "strength":
          strengthDesc.classList.add(k);
          strengthDesc.textContent = v;
          colorDesc.appendChild(strengthDesc);
          break;
        case "description":
          longDesc.classList.add(k);
          longDesc.textContent = v;
          strengthDesc.appendChild(longDesc);
          break;
        case "price":
          priceDesc.classList.add(k);
          priceDesc.textContent = v;
          strengthDesc.appendChild(priceDesc);
          break;
      }
    }
  }
}

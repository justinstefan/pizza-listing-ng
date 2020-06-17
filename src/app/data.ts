type FoodMenuItem = {
  id: Number;
  name: String;
  category: Number[];
  addons?: Number[];
  ingredients?: String[];
  price: String;
};

type FoodMenuCategory = {
  id: Number;
  name: String;
  addons?: Number[];
};

type FoodAddon = {
  id: Number;
  name: String;
  choices: {
    name: String;
    id: Number;
    price?: Number;
    currency?: String;
  }[];
};

export { FoodMenuItem, FoodMenuCategory, FoodAddon };

export const foodMenuCategories: FoodMenuCategory[] = [
  {
    id: 1,
    name: "Pizza",
    addons: [1],
  },
  {
    id: 2,
    name: "Pasta",
    addons: [2],
  },
];

export const foodMenuItems: FoodMenuItem[] = [
  {
    id: 1,
    name: "Pizza margherita",
    addons: [2],
    category: [1],
    ingredients: ["tomato sauce", "cheese"],
    price: "7 RON",
  },
  {
    id: 2,
    name: "Pizza Prosciutto",
    category: [1],
    ingredients: ["tomato sauce", "cheese", "ham"],
    price: "10 RON",
  },
  {
    id: 3,
    name: "Spaghetti Bolognese",
    category: [2],
    price: "9.00 RON",
  },
  {
    id: 4,
    name: "Spaghetti Frutti di Mare",
    category: [2],
    ingredients: ["with sea food"],
    price: "12.00 RON",
  },
];

export const foodAddons: FoodAddon[] = [
  {
    id: 1,
    name: "Crust",
    choices: [
      {
        id: 11,
        name: "Fluffy",
      },
      {
        id: 12,
        name: "Crispy",
      },
    ],
  },
  {
    id: 2,
    name: "Extra Toppings",
    choices: [
      {
        id: 21,
        name: "Corn",
        price: 0.7,
        currency: "RON"
      },
      {
        id: 22,
        name: "Extra Mozarella",
        price: 1.20,
        currency: "RON"
      },
    ],
  },
];

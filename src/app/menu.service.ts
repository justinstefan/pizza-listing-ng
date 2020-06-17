import { Injectable } from "@angular/core";

import data from 'src/assets/data.json'

export type FoodMenuItem = {
  id: Number;
  name: String;
  category: Number[];
  addons?: Number[];
  ingredients?: String[];
  price: String;
};

export type FoodMenuCategory = {
  id: Number;
  name: String;
  addons?: Number[];
};

export type FoodAddon = {
  id: Number;
  name: String;
  choices: {
    name: String;
    id: Number;
    price?: Number;
    currency?: String;
  }[];
};

@Injectable({
  providedIn: "root",
})
export class MenuService {
  menuCategories: FoodMenuCategory[] = data.menuCategories;
  menuItems: FoodMenuItem[] = data.menuItems;
  menuAddons: FoodAddon[] = data.foodAddons;

  constructor() {}

  getMenuCategories(): FoodMenuCategory[] {
    return this.menuCategories;
  }

  getMenuItemsByCategoryId(categoryId: Number): FoodMenuItem[] {
    return this.menuItems.filter(
      (item) => item.category.indexOf(categoryId) > -1
    );
  }

  getMenuItem(menuItemId: Number): FoodMenuItem {
    return this.menuItems.find((item) => item.id === menuItemId);
  }

  getAddons(addonIds?: Number[]) : FoodAddon[] {
    if (!addonIds) {
      return this.menuAddons;
    }
    return this.menuAddons.filter((addon) => addonIds.indexOf(addon.id) > -1);
  }
}

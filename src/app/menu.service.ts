import { Injectable } from "@angular/core";
import {
  foodMenuCategories,
  foodMenuItems,
  foodAddons,
  FoodMenuCategory,
  FoodMenuItem,
  FoodAddon,
} from "./data";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  menuCategories: FoodMenuCategory[] = foodMenuCategories;
  menuItems: FoodMenuItem[] = foodMenuItems;
  menuAddons: FoodAddon[] = foodAddons;

  constructor() {}

  getMenuCategories() {
    return this.menuCategories;
  }

  getMenuItemsByCategoryId(categoryId) {
    return this.menuItems.filter(
      (item) => item.category.indexOf(categoryId) > -1
    );
  }

  getMenuItem(menuItemId) {
    return this.menuItems.find((item) => item.id === menuItemId);
  }

  getAddons(addonIds?) {
    if(!addonIds) {
      return this.menuAddons
    }
    return this.menuAddons.filter(addon => addonIds.indexOf(addon.id) > -1);
  }
}

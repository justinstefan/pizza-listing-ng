import { Component, OnInit } from '@angular/core';
import { MenuService, FoodMenuCategory, FoodMenuItem } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menuCategories: FoodMenuCategory[] = []

  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.menuCategories = this.menuService.getMenuCategories()
  }

  getMenuItemsByCategoryId(categoryId: number): FoodMenuItem[] {
    return this.menuService.getMenuItemsByCategoryId(categoryId)
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';
import { FoodMenuCategory } from '../data';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menuCategories: FoodMenuCategory[] = []

  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.menuCategories = this.menuService.getMenuCategories()
    console.log(this.menuCategories)
  }

  navigateToDetails(itemId) {
    this.router.navigate(['menu-item-details', itemId]);
  }

  getMenuItemsByCategoryId(categoryId) {
    return this.menuService.getMenuItemsByCategoryId(categoryId)
  }
}

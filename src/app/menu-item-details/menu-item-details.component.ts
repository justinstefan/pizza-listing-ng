import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodMenuItem, FoodAddon } from '../data';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.scss']
})
export class MenuItemDetailsComponent implements OnInit {
  menuItemId: number;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.menuItemId = parseInt(this.route.snapshot.paramMap.get('menuItemId'), 10);
  }

  navigateBack() {
    this.router.navigate(['menu-list'])
  }

  toggleAddonChoice(choice: any) {

  }

  get menuAddons(): FoodAddon[] {
    return this.menuService.menuAddons
  }

  get menuItem(): FoodMenuItem {
    return this.menuService.getMenuItem(this.menuItemId)
  }
}

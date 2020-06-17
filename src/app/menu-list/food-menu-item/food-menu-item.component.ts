import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FoodMenuItem } from 'src/app/menu.service';

@Component({
  selector: 'app-food-menu-item',
  templateUrl: './food-menu-item.component.html',
  styleUrls: ['./food-menu-item.component.scss']
})
export class FoodMenuItemComponent implements OnInit {
  @Input() menuItem: FoodMenuItem | any = {};

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToDetails(itemId: number) {
    this.router.navigate(['menu-item-details', itemId]);
  }
}

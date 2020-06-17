import { Component, OnInit, Input } from '@angular/core';
import { FoodAddon } from 'src/app/menu.service';

@Component({
  selector: 'app-food-addon-list',
  templateUrl: './food-addon-list.component.html',
  styleUrls: ['./food-addon-list.component.scss']
})
export class FoodAddonListComponent implements OnInit {
  @Input() listData: FoodAddon[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggleAddonChoice(choice: any) {

  }
}

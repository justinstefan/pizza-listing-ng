import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { MenuItemDetailsComponent } from "./menu-item-details.component";
import { FoodAddonListComponent } from './food-addon-list/food-addon-list.component';

describe("MenuItemDetailsComponent", () => {
  let component: MenuItemDetailsComponent;
  let fixture: ComponentFixture<MenuItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemDetailsComponent, FoodAddonListComponent],
      imports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
        RouterTestingModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

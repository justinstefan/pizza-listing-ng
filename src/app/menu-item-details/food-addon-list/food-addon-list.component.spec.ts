import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddonListComponent } from './food-addon-list.component';

import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatRippleModule } from "@angular/material/core";

describe('FoodAddonListComponent', () => {
  let component: FoodAddonListComponent;
  let fixture: ComponentFixture<FoodAddonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAddonListComponent ],
      imports: [
        MatDividerModule,
        MatRippleModule,
        MatCardModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAddonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

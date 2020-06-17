import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuListComponent } from "./menu-list/menu-list.component";
import { MenuItemDetailsComponent } from "./menu-item-details/menu-item-details.component";

import { FoodAddonListComponent } from "./menu-item-details/food-addon-list/food-addon-list.component";
import { FoodMenuItemComponent } from './menu-list/food-menu-item/food-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MenuItemDetailsComponent,
    FoodAddonListComponent,
    FoodMenuItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

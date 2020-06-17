import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';

import data from 'src/assets/data.json'

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });

  it('should load food menu data', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service.menuCategories).toEqual(data.menuCategories);
    expect(service.menuItems).toEqual(data.menuItems);
    expect(service.menuAddons).toEqual(data.foodAddons);
  });

  it('should filter menu items by category', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service.getMenuItemsByCategoryId(1).length).toEqual(2);
  });

  it('should find menu item by id', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service.getMenuItem(1).id).toEqual(1);
  });

  it('should get all addons', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service.getAddons()).toEqual(data.foodAddons);
  });

  it('should find addons by ids', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service.getAddons([1]).length).toBe(1);
    expect(service.getAddons([1, 2]).length).toBe(2);
  });
});

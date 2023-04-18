import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriesListPageComponent } from './admin-categories-list-page.component';

describe('AdminCategoriesListPageComponent', () => {
  let component: AdminCategoriesListPageComponent;
  let fixture: ComponentFixture<AdminCategoriesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoriesListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoriesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

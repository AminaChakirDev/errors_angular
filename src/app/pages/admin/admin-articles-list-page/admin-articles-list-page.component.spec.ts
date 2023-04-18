import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticlesListPageComponent } from './admin-articles-list-page.component';

describe('AdminArticlesListPageComponent', () => {
  let component: AdminArticlesListPageComponent;
  let fixture: ComponentFixture<AdminArticlesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArticlesListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArticlesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

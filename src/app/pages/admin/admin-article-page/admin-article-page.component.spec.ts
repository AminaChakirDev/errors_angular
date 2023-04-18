import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticlePageComponent } from './admin-article-page.component';

describe('AdminArticlePageComponent', () => {
  let component: AdminArticlePageComponent;
  let fixture: ComponentFixture<AdminArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArticlePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

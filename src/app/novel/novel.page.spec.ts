import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovelPage } from './novel.page';

describe('NovelPage', () => {
  let component: NovelPage;
  let fixture: ComponentFixture<NovelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NovelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerpustakaanPage } from './perpustakaan.page';

describe('PerpustakaanPage', () => {
  let component: PerpustakaanPage;
  let fixture: ComponentFixture<PerpustakaanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerpustakaanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

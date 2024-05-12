import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MajalahPage } from './majalah.page';

describe('MajalahPage', () => {
  let component: MajalahPage;
  let fixture: ComponentFixture<MajalahPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MajalahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

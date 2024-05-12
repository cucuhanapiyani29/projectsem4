import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KoranPage } from './koran.page';

describe('KoranPage', () => {
  let component: KoranPage;
  let fixture: ComponentFixture<KoranPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KoranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

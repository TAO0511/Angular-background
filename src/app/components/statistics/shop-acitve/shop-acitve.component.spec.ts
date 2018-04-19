import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAcitveComponent } from './shop-acitve.component';

describe('ShopAcitveComponent', () => {
  let component: ShopAcitveComponent;
  let fixture: ComponentFixture<ShopAcitveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAcitveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAcitveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

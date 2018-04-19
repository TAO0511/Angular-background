import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticDateComponent } from './statistic-date.component';

describe('StatisticDateComponent', () => {
  let component: StatisticDateComponent;
  let fixture: ComponentFixture<StatisticDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

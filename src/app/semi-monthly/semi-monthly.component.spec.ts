import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiMonthlyComponent } from './semi-monthly.component';

describe('SemiMonthlyComponent', () => {
  let component: SemiMonthlyComponent;
  let fixture: ComponentFixture<SemiMonthlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemiMonthlyComponent]
    });
    fixture = TestBed.createComponent(SemiMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

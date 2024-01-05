import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiWeekdaysComponent } from './semi-weekdays.component';

describe('SemiWeekdaysComponent', () => {
  let component: SemiWeekdaysComponent;
  let fixture: ComponentFixture<SemiWeekdaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemiWeekdaysComponent]
    });
    fixture = TestBed.createComponent(SemiWeekdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

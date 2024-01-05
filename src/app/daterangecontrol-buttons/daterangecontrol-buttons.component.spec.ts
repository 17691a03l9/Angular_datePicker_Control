import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaterangecontrolButtonsComponent } from './daterangecontrol-buttons.component';

describe('DaterangecontrolButtonsComponent', () => {
  let component: DaterangecontrolButtonsComponent;
  let fixture: ComponentFixture<DaterangecontrolButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaterangecontrolButtonsComponent]
    });
    fixture = TestBed.createComponent(DaterangecontrolButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

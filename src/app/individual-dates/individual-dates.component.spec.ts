import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDatesComponent } from './individual-dates.component';

describe('IndividualDatesComponent', () => {
  let component: IndividualDatesComponent;
  let fixture: ComponentFixture<IndividualDatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualDatesComponent]
    });
    fixture = TestBed.createComponent(IndividualDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

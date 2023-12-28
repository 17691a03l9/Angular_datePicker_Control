import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeakdaysComponent } from './weakdays.component';

describe('WeakdaysComponent', () => {
  let component: WeakdaysComponent;
  let fixture: ComponentFixture<WeakdaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeakdaysComponent]
    });
    fixture = TestBed.createComponent(WeakdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

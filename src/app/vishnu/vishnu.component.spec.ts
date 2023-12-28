import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VishnuComponent } from './vishnu.component';

describe('VishnuComponent', () => {
  let component: VishnuComponent;
  let fixture: ComponentFixture<VishnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VishnuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VishnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

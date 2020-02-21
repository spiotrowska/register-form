import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormStepperComponent } from './register-form-stepper.component';

describe('RegisterFormStepperComponent', () => {
  let component: RegisterFormStepperComponent;
  let fixture: ComponentFixture<RegisterFormStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

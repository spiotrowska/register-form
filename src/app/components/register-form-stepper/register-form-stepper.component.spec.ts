import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormStepperComponent } from './register-form-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalDataStepComponent } from './personal-data-step/personal-data-step.component';
import { LoginDataStepComponent } from './login-data-step/login-data-step.component';
import { StyledInputComponent } from '../UI/styled-input/styled-input.component';

describe('RegisterFormStepperComponent', () => {
  let component: RegisterFormStepperComponent;
  let fixture: ComponentFixture<RegisterFormStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ 
        RegisterFormStepperComponent,
        PersonalDataStepComponent,
        LoginDataStepComponent,
        StyledInputComponent 
      ]
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

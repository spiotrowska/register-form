import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDataStepComponent } from './login-data-step.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StyledInputComponent } from '../../UI/styled-input/styled-input.component';

describe('LoginDataStepComponent', () => {
  let component: LoginDataStepComponent;
  let fixture: ComponentFixture<LoginDataStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ 
        LoginDataStepComponent,
        StyledInputComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDataStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

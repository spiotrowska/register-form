import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { StyledInputConfirmPasswordComponent } from './styled-input-confirm-password.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('StyledInputConfirmPasswordComponent', () => {
  let component: StyledInputConfirmPasswordComponent;
  let fixture: ComponentFixture<StyledInputConfirmPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ StyledInputConfirmPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(StyledInputConfirmPasswordComponent);
    component = fixture.componentInstance;
    component.formGroup = fb.group({
      confirmPassword: ''
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

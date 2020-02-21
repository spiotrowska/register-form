import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { StyledInputPasswordComponent } from './styled-input-password.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('StyledInputPasswordComponent', () => {
  let component: StyledInputPasswordComponent;
  let fixture: ComponentFixture<StyledInputPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [StyledInputPasswordComponent]
    })
      .compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(StyledInputPasswordComponent);
    component = fixture.componentInstance;
    component.formGroup = fb.group({
      password: ''
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

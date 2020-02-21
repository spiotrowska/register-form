import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { StyledInputComponent } from './styled-input.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('StyledInputComponent', () => {
  let component: StyledInputComponent;
  let fixture: ComponentFixture<StyledInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ StyledInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(StyledInputComponent);
    component = fixture.componentInstance;
    component.formControlName = 'controlName';
    component.formGroup = fb.group({
      controlName: ''
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

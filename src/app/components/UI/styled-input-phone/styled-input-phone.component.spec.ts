import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { StyledInputPhoneComponent } from './styled-input-phone.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('StyledInputPhoneComponent', () => {
  let component: StyledInputPhoneComponent;
  let fixture: ComponentFixture<StyledInputPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ StyledInputPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(StyledInputPhoneComponent);
    component = fixture.componentInstance;
    component.formGroup = fb.group({
      phone: ''
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

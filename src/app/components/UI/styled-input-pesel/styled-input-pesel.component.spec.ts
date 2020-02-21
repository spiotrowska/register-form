import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { StyledInputPeselComponent } from './styled-input-pesel.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('StyledInputPeselComponent', () => {
  let component: StyledInputPeselComponent;
  let fixture: ComponentFixture<StyledInputPeselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ StyledInputPeselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(StyledInputPeselComponent);
    component = fixture.componentInstance;
    component.formGroup = fb.group({
      pesel: ''
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

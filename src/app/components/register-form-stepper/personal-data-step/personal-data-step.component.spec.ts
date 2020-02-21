import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataStepComponent } from './personal-data-step.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StyledInputComponent } from '../../UI/styled-input/styled-input.component';

describe('PersonalDataStepComponent', () => {
  let component: PersonalDataStepComponent;
  let fixture: ComponentFixture<PersonalDataStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ 
        PersonalDataStepComponent,
        StyledInputComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

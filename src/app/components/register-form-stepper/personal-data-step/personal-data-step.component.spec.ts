import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataStepComponent } from './personal-data-step.component';

describe('PersonalDataStepComponent', () => {
  let component: PersonalDataStepComponent;
  let fixture: ComponentFixture<PersonalDataStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDataStepComponent ]
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

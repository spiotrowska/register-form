import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDataStepComponent } from './login-data-step.component';

describe('LoginDataStepComponent', () => {
  let component: LoginDataStepComponent;
  let fixture: ComponentFixture<LoginDataStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDataStepComponent ]
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

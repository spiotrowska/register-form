import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledInputConfirmPasswordComponent } from './styled-input-confirm-password.component';

describe('StyledInputConfirmPasswordComponent', () => {
  let component: StyledInputConfirmPasswordComponent;
  let fixture: ComponentFixture<StyledInputConfirmPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledInputConfirmPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledInputConfirmPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

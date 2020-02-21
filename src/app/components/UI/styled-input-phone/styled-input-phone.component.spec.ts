import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledInputPhoneComponent } from './styled-input-phone.component';

describe('StyledInputPhoneComponent', () => {
  let component: StyledInputPhoneComponent;
  let fixture: ComponentFixture<StyledInputPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledInputPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledInputPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

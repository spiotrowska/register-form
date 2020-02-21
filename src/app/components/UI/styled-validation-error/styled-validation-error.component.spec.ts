import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledValidationErrorComponent } from './styled-validation-error.component';

describe('StyledValidationErrorComponent', () => {
  let component: StyledValidationErrorComponent;
  let fixture: ComponentFixture<StyledValidationErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledValidationErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledValidationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

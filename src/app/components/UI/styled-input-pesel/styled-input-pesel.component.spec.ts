import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledInputPeselComponent } from './styled-input-pesel.component';

describe('StyledInputPeselComponent', () => {
  let component: StyledInputPeselComponent;
  let fixture: ComponentFixture<StyledInputPeselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledInputPeselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledInputPeselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

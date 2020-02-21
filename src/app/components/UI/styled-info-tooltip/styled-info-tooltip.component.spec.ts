import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledInfoTooltipComponent } from './styled-info-tooltip.component';

describe('StyledInfoTooltipComponent', () => {
  let component: StyledInfoTooltipComponent;
  let fixture: ComponentFixture<StyledInfoTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledInfoTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledInfoTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

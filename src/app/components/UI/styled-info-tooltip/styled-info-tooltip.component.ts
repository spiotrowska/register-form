import { Component, OnInit, Input } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-styled-info-tooltip',
  templateUrl: './styled-info-tooltip.component.html',
  styleUrls: ['./styled-info-tooltip.component.scss']
})
export class StyledInfoTooltipComponent implements OnInit {
  @Input() info: string;
  faInfoCircle = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { faCheckCircle, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-confirmation-step',
  templateUrl: './confirmation-step.component.html',
  styleUrls: ['./confirmation-step.component.scss']
})
export class ConfirmationStepComponent implements OnInit {
  @Input() stepper: MatStepper;
  faCheckCircle = faCheckCircle;
  faUndoAlt = faUndoAlt;

  constructor() { }

  ngOnInit(): void {
  }

}

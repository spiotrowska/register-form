import { Component, OnInit, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ValidationErrorMessage } from './../../../_helpers/validationr-error-message-strategy/validation-error-message';
import { RequiredErrorMessage } from './../../../_helpers/validationr-error-message-strategy/required-error-message';
import { PatternErrorMessage } from './../../../_helpers/validationr-error-message-strategy/pattern-error-message';
import { MinLengthErrorMessage } from './../../../_helpers/validationr-error-message-strategy/min-length-error-message';
import { MaxLengthErrorMessage } from './../../../_helpers/validationr-error-message-strategy/max-length-error-message';

@Component({
  selector: 'app-styled-validation-error',
  templateUrl: './styled-validation-error.component.html',
  styleUrls: ['./styled-validation-error.component.scss']
})
export class StyledValidationErrorComponent implements OnInit {
  @Input() errors: ValidationErrors | null;
  @Input() controlName: string;

  constructor() { }

  ngOnInit(): void {
  }

  get errorType(): string {
    return Object.keys(this.errors)[0];
  }

  get requiredLengthNumber(): number {
    return Object.values(this.errors)[0].requiredLength;
  }

  get errorMessage(): string {
    switch (this.errorType) {
      case 'required': return new ValidationErrorMessage(new RequiredErrorMessage()).getErrorMessage(this.controlName);
      case 'minlength': return new ValidationErrorMessage(new MinLengthErrorMessage(this.requiredLengthNumber)).getErrorMessage(this.controlName);
      case 'maxlength': return new ValidationErrorMessage(new MaxLengthErrorMessage(this.requiredLengthNumber)).getErrorMessage(this.controlName);
      default: return new ValidationErrorMessage(new PatternErrorMessage()).getErrorMessage(this.controlName);
    }
  }

}

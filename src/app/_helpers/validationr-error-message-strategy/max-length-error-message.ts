import { IValidationErrorMessageStrategy } from './validation-error-message.strategy';

export class MaxLengthErrorMessage implements IValidationErrorMessageStrategy {
    maxLength: number;

    constructor(maxLength: number) {
        this.maxLength = maxLength;
    }

    getErrorMessage(formControlName: string): string {
      return `${formControlName} can has maximum ${this.maxLength} signs`;
    }
  }
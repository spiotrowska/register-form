import { IValidationErrorMessageStrategy } from './validation-error-message.strategy';

export class MinLengthErrorMessage implements IValidationErrorMessageStrategy {
    minLength: number;

    constructor(minLength: number) {
        this.minLength = minLength;
    }

    getErrorMessage(formControlName: string): string {
      return `${formControlName} must has at least ${this.minLength} signs`;
    }
  }
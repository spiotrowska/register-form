import { IValidationErrorMessageStrategy } from './validation-error-message.strategy';

export class PatternErrorMessage implements IValidationErrorMessageStrategy {
    getErrorMessage(formControlName: string): string {
      return `Please enter a valid ${formControlName.toLowerCase()}`;
    }
  }
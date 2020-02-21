import { IValidationErrorMessageStrategy } from './validation-error-message.strategy';

export class RequiredErrorMessage implements IValidationErrorMessageStrategy {
    getErrorMessage(formControlName: string): string {
      return `${formControlName} is required!`;
    }
  }
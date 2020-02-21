import { IValidationErrorMessageStrategy } from './validation-error-message.strategy';

export class ValidationErrorMessage {
    public strategy: IValidationErrorMessageStrategy;

    constructor(strategy: IValidationErrorMessageStrategy) {
        this.strategy = strategy;
    }

    getErrorMessage(formControlName: string): string {
        return this.strategy.getErrorMessage(formControlName);
    }
}
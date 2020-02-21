import { IValidationErrorMessageStrategy } from './validation-error-message.strategy';

export class RequiredErrorMessage implements IValidationErrorMessageStrategy {
    getErrorMessage(formControlName: string): string {
        return `${formControlName} is required`;
    }
}

export class PatternErrorMessage implements IValidationErrorMessageStrategy {
    getErrorMessage(formControlName: string): string {
        return `Please enter a valid ${formControlName.toLowerCase()}`;
    }
}

export class MaxLengthErrorMessage implements IValidationErrorMessageStrategy {
    maxLength: number;

    constructor(maxLength: number) {
        this.maxLength = maxLength;
    }

    getErrorMessage(formControlName: string): string {
        return `${formControlName} should have maximum ${this.maxLength} signs`;
    }
}

export class MinLengthErrorMessage implements IValidationErrorMessageStrategy {
    minLength: number;

    constructor(minLength: number) {
        this.minLength = minLength;
    }

    getErrorMessage(formControlName: string): string {
        return `${formControlName} must have at least ${this.minLength} signs`;
    }
}
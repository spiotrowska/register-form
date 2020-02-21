export interface IValidationErrorMessageStrategy {
    getErrorMessage(formControlName: string): string;
}
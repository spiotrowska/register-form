import { FormGroup, FormControl } from '@angular/forms';

export function mustMatchValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

export function mustNotMatchToStringValidator(matchingString: string) {
    return (control: FormControl) => {
        if (control.value && control.value === matchingString) {
            return { mustNotMatchToString: true };
        } else {
           return null;
        }
    }
}
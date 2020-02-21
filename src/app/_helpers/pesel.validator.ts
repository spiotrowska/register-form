import { FormControl } from '@angular/forms';

export function peselValidator() {
    return (formControl: FormControl) => {
        const pesel = formControl.value;
        if (!pesel) {
            return;
        }
        const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
        let sum = 0;
        const controlNumber = parseInt(pesel.substring(10, 11));
        for (let i = 0; i < weight.length; i++) {
            sum += (parseInt(pesel.substring(i, i + 1)) * weight[i]);
        }
        sum = sum % 10;
        if (10 - sum !== controlNumber) {
            return { peselPattern: true };
        } else {
            return null;
        }
    }
}
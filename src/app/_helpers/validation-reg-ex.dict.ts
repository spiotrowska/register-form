export enum ValidationRegExDict {
    OnlyLetters = '^[a-zA-Z]*$',
    OnlyDigits = '^[0-9]*$',
    OnlyLettersAndDigits = '^[a-zA-Z0-9]*$',
    Password = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])|(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&\/=?_.,:;\\-])|(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&\/=?_.,:;\\-])|(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&\/=?_.,:;\\-])$'
}
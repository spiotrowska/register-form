import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-styled-input',
  templateUrl: './styled-input.component.html',
  styleUrls: ['./styled-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StyledInputComponent),
      multi: true
    }
  ]
})
export class StyledInputComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() formControlName: string;
  @Input() formGroup: FormGroup;
  @Input() type = 'text';
  @Input() tooltip: string;

  constructor() { }

  ngOnInit(): void { }

  get formControl(): AbstractControl {
    return this.formGroup.get(this.formControlName);
  }

  get errors(): ValidationErrors | null {
    return this.formControl.errors;
  }

  writeValue(): void { }

  registerOnChange(): void { }

  registerOnTouched(): void { }

}

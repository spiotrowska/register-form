import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-styled-input-password',
  templateUrl: './styled-input-password.component.html',
  styleUrls: ['./styled-input-password.component.scss']
})
export class StyledInputPasswordComponent implements OnInit {
  @Input() formGroup: FormGroup;
  hide = true;
  tooltipText = 'Must contain three of the following: upper case letters, lower case letters, special characters, numbers';

  constructor() { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.formGroup.get('password');
  }

  get errors(): ValidationErrors | null {
    return this.formControl.errors;
  }

}

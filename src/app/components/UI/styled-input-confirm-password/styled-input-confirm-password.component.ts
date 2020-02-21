import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-styled-input-confirm-password',
  templateUrl: './styled-input-confirm-password.component.html',
  styleUrls: ['./styled-input-confirm-password.component.scss']
})
export class StyledInputConfirmPasswordComponent implements OnInit {
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.formGroup.get('confirmPassword');
  }

  get errors(): ValidationErrors | null {
    return this.formControl.errors;
  }

}

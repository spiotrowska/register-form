import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-styled-input-phone',
  templateUrl: './styled-input-phone.component.html',
  styleUrls: ['./styled-input-phone.component.scss']
})
export class StyledInputPhoneComponent implements OnInit {
  @Input() formGroup: FormGroup;
  mask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  constructor() { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.formGroup.get('phone');
  }

  get errors(): ValidationErrors | null {
    return this.formControl.errors;
  }

}

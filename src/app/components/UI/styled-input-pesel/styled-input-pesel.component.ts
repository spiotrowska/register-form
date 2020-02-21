import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-styled-input-pesel',
  templateUrl: './styled-input-pesel.component.html',
  styleUrls: ['./styled-input-pesel.component.scss']
})
export class StyledInputPeselComponent implements OnInit {
  @Input() formGroup: FormGroup;
  mask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  
  constructor() { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.formGroup.get('pesel');
  }

  get errors(): ValidationErrors | null {
    return this.formControl.errors;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register-form-stepper',
  templateUrl: './register-form-stepper.component.html',
  styleUrls: ['./register-form-stepper.component.scss']
})
export class RegisterFormStepperComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  get personalDataControl(): AbstractControl {
    return this.registerForm.get('personalData');
  }

  get loginDataControl(): AbstractControl {
    return this.registerForm.get('loginData');
  }

  get emailValue(): string {
    return this.registerForm.value.personalData?.email;
  }
  
  ngOnInit() {
    this.createRegisterForm();
  }

  private createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      personalData: "",
      loginData: ""
    });
  }

}

import { Component, OnInit, forwardRef, Input, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor, Validators, AbstractControl, ValidationErrors, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Subscription } from 'rxjs';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { mustMatchValidator, mustNotMatchToStringValidator } from './../../../shared/match.validator';
import { ValidationRegExDict } from './../../../shared/validation-reg-ex.dict';

@Component({
  selector: 'app-login-data-step',
  templateUrl: './login-data-step.component.html',
  styleUrls: ['./login-data-step.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginDataStepComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LoginDataStepComponent),
      multi: true
    }
  ]
})
export class LoginDataStepComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor, Validator {
  @Input() emailValue: string;
  @Input() stepper: MatStepper;
  loginDataForm: FormGroup;
  subscriptions: Subscription[] = [];
  faArrowLeft = faArrowLeft;
  loginTooltipText = 'Only letters and digits, cannot be the same as e-mail';

  constructor(private formBuilder: FormBuilder) { }

  get loginControl(): AbstractControl {
    return this.loginDataForm.get('login');
  }

  ngOnInit() {
    this.createLoginDataForm();
    this.subscribeFormValueChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    const emailValueChanges = changes['emailValue'];
    if (emailValueChanges.previousValue !== emailValueChanges.currentValue && !emailValueChanges.firstChange) {
      this.loginControl.setValidators(this.getLoginValidators());
      this.loginControl.updateValueAndValidity();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(val: any): void {
    if (val === null) {
      this.loginDataForm.reset();
    } else {
      val && this.loginDataForm.setValue(val, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(_: AbstractControl): ValidationErrors | null {
    if (this.loginDataForm.valid) {
      this.stepper.next();
    }
    return this.loginDataForm.valid ? null : { invalidForm: { valid: false, message: "loginDataForm fields are invalid" } };
  }

  private createLoginDataForm(): void {
    this.loginDataForm = this.formBuilder.group({
      login: ['', this.getLoginValidators()],
      password: ['', this.getPasswordValidators()],
      confirmPassword: ['', this.getConfirmPasswordValidators()]
    }, {
      validator: mustMatchValidator('password', 'confirmPassword')
    });
  }

  private getLoginValidators(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern(ValidationRegExDict.OnlyLettersAndDigits),
      mustNotMatchToStringValidator(this.emailValue)
    ];
  }

  private getPasswordValidators(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(ValidationRegExDict.Password)
    ];
  }

  private getConfirmPasswordValidators(): ValidatorFn[] {
    return [Validators.required];
  }

  private subscribeFormValueChanges(): void {
    this.subscriptions.push(
      this.loginDataForm.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }
}

import { Component, OnInit, forwardRef, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor, Validators, AbstractControl, ValidationErrors, Validator, NG_VALIDATORS, ValidatorFn } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Subscription } from 'rxjs';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ValidationRegExDict } from '../../../shared/validation-reg-ex.dict';
import { peselValidator } from './../../../shared/pesel.validator';

@Component({
  selector: 'app-personal-data-step',
  templateUrl: './personal-data-step.component.html',
  styleUrls: ['./personal-data-step.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonalDataStepComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PersonalDataStepComponent),
      multi: true
    }
  ]
})
export class PersonalDataStepComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {
  @Input() stepper: MatStepper;
  personalDataForm: FormGroup;
  subscriptions: Subscription[] = [];
  faArrowRight = faArrowRight;
  autoNextStep = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createPersonalDataForm();
    this.subscribeFormValueChanges();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(val: any): void {
    if (val === null) {
      this.personalDataForm.reset();
      this.autoNextStep = true;
    } else {
      val && this.personalDataForm.setValue(val, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(_: AbstractControl): ValidationErrors | null {
    if (this.personalDataForm.valid && this.autoNextStep) {
      this.stepper.next();
      this.autoNextStep = false;
    }
    return this.personalDataForm.valid ? null : { invalidForm: { valid: false, message: "personalDataForm fields are invalid" } };
  }

  private createPersonalDataForm(): void {
    this.personalDataForm = this.formBuilder.group({
      firstName: ['', this.getUserNameValidators()],
      lastName: ['', this.getUserNameValidators()],
      pesel: ['', this.getPeselValidators()],
      email: ['', this.getEmailValidators()],
      phone: ['', this.getPhoneValidators()]
    });
  }

  private getUserNameValidators(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.pattern(ValidationRegExDict.OnlyLetters)
    ];
  }

  private getPeselValidators(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.pattern(ValidationRegExDict.OnlyDigits),
      Validators.maxLength(11),
      Validators.minLength(11),
      peselValidator()
    ];
  }

  private getEmailValidators(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.email
    ];
  }

  private getPhoneValidators(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.pattern(ValidationRegExDict.OnlyDigits),
      Validators.maxLength(9),
      Validators.minLength(9)
    ];
  }

  private subscribeFormValueChanges(): void {
    this.subscriptions.push(
      this.personalDataForm.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

}

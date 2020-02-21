import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RegisterFormStepperComponent } from './components/register-form-stepper/register-form-stepper.component';
import { PersonalDataStepComponent } from './components/register-form-stepper/personal-data-step/personal-data-step.component';
import { LoginDataStepComponent } from './components/register-form-stepper/login-data-step/login-data-step.component';
import { ConfirmationStepComponent } from './components/register-form-stepper/confirmation-step/confirmation-step.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { StyledInputComponent } from './components/UI/styled-input/styled-input.component';
import { StyledValidationErrorComponent } from './components/UI/styled-validation-error/styled-validation-error.component';
import { StyledInputPhoneComponent } from './components/UI/styled-input-phone/styled-input-phone.component';
import { StyledInputPeselComponent } from './components/UI/styled-input-pesel/styled-input-pesel.component';
import { StyledInputConfirmPasswordComponent } from './components/UI/styled-input-confirm-password/styled-input-confirm-password.component';
import { TextMaskModule } from 'angular2-text-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    RegisterFormStepperComponent,
    PersonalDataStepComponent,
    LoginDataStepComponent,
    ConfirmationStepComponent,
    StyledInputComponent,
    StyledValidationErrorComponent,
    StyledInputPhoneComponent,
    StyledInputPeselComponent,
    StyledInputConfirmPasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    TextMaskModule,
    FontAwesomeModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

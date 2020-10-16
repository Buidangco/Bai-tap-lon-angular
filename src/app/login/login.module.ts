import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {LoginComponent} from './login.component';
import { RouterModule,Routes} from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
     RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent,
      },
  ]),
  ]
})
export class LoginModule { }

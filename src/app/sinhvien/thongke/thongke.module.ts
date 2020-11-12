import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import {ThongkeComponent} from './thongke.component'
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [ThongkeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
     ButtonModule,
    RouterModule.forChild([
      {
        path:"thongke",
        component:ThongkeComponent,
      },
    ]),
  ]
})
export class ThongkeModule { }

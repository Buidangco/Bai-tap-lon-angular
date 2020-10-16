import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NguoidungComponent } from './nguoidung.component';
import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  declarations: [NguoidungComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputMaskModule,
    RouterModule.forChild([
      {
        path: 'nguoidung',
        component: NguoidungComponent,
      },
  ]),
  ]
})
export class NguoidungModule { }

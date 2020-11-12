import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { DanhsachtheolopComponent } from './danhsachtheolop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [DanhsachtheolopComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    TableModule,
    ButtonModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      {
        path: 'sinhvien',
        component: DanhsachtheolopComponent,
      },
  ]),
  ]
})
export class DanhsachtheolopModule { }

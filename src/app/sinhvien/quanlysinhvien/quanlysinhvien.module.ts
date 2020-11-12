import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { QuanlysinhvienComponent } from './quanlysinhvien.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [QuanlysinhvienComponent],
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
        path: 'danhsachsv',
        component: QuanlysinhvienComponent,
      },
  ]),
  ]
})
export class QuanlysinhvienModule { }

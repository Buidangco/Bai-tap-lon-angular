import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import{QuanlykehoachComponent} from './quanlykehoach.component'
// import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [QuanlykehoachComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    // FormsModule,
    RouterModule.forChild([
      {
        path: 'kehoach',
        component: QuanlykehoachComponent,
      },
  ]),
  ]
})
export class QuanlykehoachModule { }

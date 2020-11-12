import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { DanhsachComponent } from './danhsach.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import {ToastModule} from 'primeng/toast';
// import {RippleModule} from 'primeng/ripple';
// import { MessageService } from 'primeng/api';

// export const mainRoutes: Routes = [
//   {
//     path: 'sv', component:DanhsachComponent,
//       // children: [
//       //     {
//       //         path: 'sv', loadChildren: () => import('./danhsach/danhsach.module').then(m => m.DanhsachModule)
//       //     },
//       // ]
//   }
// ];

@NgModule({
  declarations: [DanhsachComponent,DanhsachComponent],
  imports: [
    // ToastModule,
    // RippleModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    TableModule,
    ButtonModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      {
        path: 'sv',
        component: DanhsachComponent,
      },
  ]),
  ]
  // providers: [
  //   MessageService,
  //   Ng2SearchPipeModule
  // ]
})
export class DanhsachModule { }

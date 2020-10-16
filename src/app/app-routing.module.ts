import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {SinhvienComponent} from "./sinhvien/sinhvien.component";
import { LoginComponent } from './login/login.component';
import { AuthGuard, RoleGuard } from './lib/auth.guard';

const routes: Routes = [
      {
        path: 'nguoidung',loadChildren: () => import('./nguoidung/nguoidung.module').then((m) => m.NguoidungModule)
      },
      {
        path: '',loadChildren: () => import('./sinhvien/sinhvien.module').then((m) => m.SinhvienModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
      },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

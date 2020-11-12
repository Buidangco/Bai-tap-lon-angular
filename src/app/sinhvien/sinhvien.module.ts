import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {SinhvienComponent} from './sinhvien.component';
import {AsideComponent} from '../shared/aside/aside.component';
import {NavbarComponent} from '../shared/navbar/navbar.component';
import {FooterComponent} from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from '../main/dashboard/dashboard.component';
import { RoleGuard } from '../lib/auth.guard';
import { Role } from '../models/role';
export const mainRoutes: Routes = [
  {
    path: '', component: SinhvienComponent,
      children: [
          {
              path: 'sv', loadChildren: () => import('./danhsach/danhsach.module').then(m => m.DanhsachModule),
              canActivate: [RoleGuard],
              data: { roles: [Role.QLHS,Role.Admin,Role.ND] },
          },
         {
          path: '', component: DashboardComponent
         },
         {
          path: 'kehoach', loadChildren: () => import('./quanlykehoach/quanlykehoach.module').then(m => m.QuanlykehoachModule),
          canActivate: [RoleGuard],
          data: { roles: [Role.Admin,,Role.ND,Role.QLHS] },
         },
         {
          path: 'danhsachsv', loadChildren: () => import('./quanlysinhvien/quanlysinhvien.module').then(m => m.QuanlysinhvienModule),
          canActivate: [RoleGuard],
          data: { roles: [Role.Admin, Role.User] },
         },
         {
          path: 'thongke', loadChildren: () => import('./thongke/thongke.module').then(m => m.ThongkeModule),
          canActivate: [RoleGuard],
          data: { roles: [Role.Admin] },
         },
         {
          path: 'sinhvien', loadChildren: () => import('./danhsachtheolop/danhsachtheolop.module').then(m => m.DanhsachtheolopModule),
          canActivate: [RoleGuard],
          data: { roles: [Role.Admin] },
         },
      ]
  }
];
@NgModule({
  declarations: [
    AsideComponent,
    NavbarComponent,
    FooterComponent,
    SinhvienComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
  ],
  exports:[
    SinhvienComponent,
  ],
  providers: [],
  bootstrap: [SinhvienComponent]
})
export class SinhvienModule { }

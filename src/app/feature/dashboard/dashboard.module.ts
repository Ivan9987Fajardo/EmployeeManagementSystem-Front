import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent
  }
]

@NgModule({
  declarations: [
    DashboardPageComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }

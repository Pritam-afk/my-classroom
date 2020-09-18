import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterGaurdService } from './services/router-gaurd.service';

const routes: Routes = [ 
  {path:'', component: LoginComponent},
  {
    path: 'dashboard/:id',
    component: DashboardComponent,
    canActivate: [RouterGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

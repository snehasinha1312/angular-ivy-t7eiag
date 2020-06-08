import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModuleComponent } from '../login-module/login-module.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginModuleComponent
  }]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginModuleRoutingModule { }

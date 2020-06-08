import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";


const routes: Routes = [
  //{path :'', canActivate:[],children:[
  {
    path: 'login',
   loadChildren: () => import('./login-module/login-module.module').then(m => m.LoginModuleModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home-module/home-module.module').then(m => m.HomeModuleModule)
  }
  //]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }





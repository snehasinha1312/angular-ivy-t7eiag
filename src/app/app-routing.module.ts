import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";


const routes: Routes = [
  {path :'', canActivate:[],children:[
  {
    path: 'login',
    loadChildren: './loginModule/LoginModuleComponent'
  },
  {
    path: 'home',
    loadChildren: './homeModule/HomeModuleComponent'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }





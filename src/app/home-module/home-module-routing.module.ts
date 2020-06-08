import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModuleComponent } from '../home-module/home-module.component'


const routes: Routes = [
  {
    path: '',
    component: HomeModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }

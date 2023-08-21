import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesoresComponent } from './pages/asesores/asesores.component';


const routes: Routes = [
  {
    path:'',
    component:AsesoresComponent  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

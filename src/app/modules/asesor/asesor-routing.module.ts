import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorComponent } from './pages/asesor/asesor.component';
import { AgregaAsesorComponent } from './pages/agregar-asesor/agrega-asesor.component';

const routes: Routes = [
  {
    path: '',
    component: AsesorComponent
  },
  {
    path: 'AgregarAsesor',
    component: AgregaAsesorComponent,
  },
  {
    path: 'EditarAsesor/:id',
    component: AgregaAsesorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }

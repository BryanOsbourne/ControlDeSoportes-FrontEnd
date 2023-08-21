import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallMonitoringComponent } from './pages/call-monitoring/call-monitoring.component';
import { AgregarLlamadaComponent } from './pages/agregar-llamada/agregar-llamada.component';
import { VerDetalleLlamadaComponent } from './pages/detalle-de-llamada/ver-detalle.llamada.component';

const routes: Routes = [
  {
    path: '',
    component: CallMonitoringComponent,
  },
  {
    path: 'AgregarLlamada',
    component: AgregarLlamadaComponent,
  },
  {
    path: 'AgregarSeguimiento/:id',
    component: AgregarLlamadaComponent,
  },
  {
    path: 'VerDetalleDeLlamada/:id',
    component: VerDetalleLlamadaComponent,
  },
  {
    path: 'VerDetalleDeLlamada/:id/AgregarSeguimiento',
    component: AgregarLlamadaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallMonitoringRoutingModule { }

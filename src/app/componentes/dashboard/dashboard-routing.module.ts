import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregaAsesorComponent } from './asesores/agrega-asesor/agrega-asesor.component';
import { AsesoresComponent } from './asesores/asesores/asesores.component';
import { AgregaClienteComponent } from './clientes/agrega-cliente/agrega-cliente.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { AgregarLlamadaComponent } from './control-de-llamadas/agregar-llamada/agregar-llamada.component';
import { ControlDeLlamadasComponent } from './control-de-llamadas/controldellamadas/control-de-llamadas.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { VerDetalleLlamadaComponent } from './control-de-llamadas/ver-detalle.llamada/ver-detalle.llamada.component';
import { AuthenticationGuard } from 'src/app/helper/authentication.guard';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'Asesores', component: AsesoresComponent },
      { path: 'Clientes', component: ClientesComponent },
      { path: 'Reportes', component: ReportesComponent },
      { path: 'AgregarLlamada', component: AgregarLlamadaComponent },
      { path: 'AgregarCliente', component: AgregaClienteComponent },
      { path: 'AgregarAsesor', component: AgregaAsesorComponent },
      { path: 'AgregarSeguimiento/:id', component: AgregarLlamadaComponent },
      { path: 'VerDetalleDeLlamada/:id', component: VerDetalleLlamadaComponent },
      { path: 'VerDetalleDeAsesor/:id', component: AgregaAsesorComponent },
      { path: 'VerDetalleDeCliente/:id', component: AgregaClienteComponent },
      { path: 'ControlDeLlamadas', component: ControlDeLlamadasComponent },
    ], canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

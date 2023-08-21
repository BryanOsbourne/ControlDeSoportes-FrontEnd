import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { AsesoresComponent } from './asesores/asesores/asesores.component'; 
import { ControlDeLlamadasComponent } from './control-de-llamadas/controldellamadas/control-de-llamadas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { AgregarLlamadaComponent } from './control-de-llamadas/agregar-llamada/agregar-llamada.component'; 
import { AgregaClienteComponent } from './clientes/agrega-cliente/agrega-cliente.component';
import { AgregaAsesorComponent } from './asesores/agrega-asesor/agrega-asesor.component';
import { VerDetalleLlamadaComponent } from './control-de-llamadas/ver-detalle.llamada/ver-detalle.llamada.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { DialogDeConfirmacionComponent } from './dialogs/dialog-de-confirmacion/dialog-de-confirmacion.component';
import { DialogLlamadaLogComponent } from './dialogs/dialog-llamada-log/dialog-llamada-log.component';
import { FiltroDeLlamadasComponent } from './control-de-llamadas/filtro-de-llamadas/filtro-de-llamadas.component';
import { TablaDeLlamadasComponent } from './control-de-llamadas/tabla-de-llamadas/tabla-de-llamadas.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ClientesComponent,
    AsesoresComponent,
    ControlDeLlamadasComponent,
    ReportesComponent,
    AgregarLlamadaComponent,
    AgregaClienteComponent,
    AgregaAsesorComponent,
    VerDetalleLlamadaComponent,
    SidenavComponent,
    FooterComponent,
    DialogDeConfirmacionComponent,
    DialogLlamadaLogComponent,
    FiltroDeLlamadasComponent,
    TablaDeLlamadasComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})

export class DashboardModule { }

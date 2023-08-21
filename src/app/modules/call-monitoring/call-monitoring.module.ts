import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallMonitoringRoutingModule } from './call-monitoring-routing.module';
import { CallMonitoringComponent } from './pages/call-monitoring/call-monitoring.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltroDeLlamadasComponent } from './components/filtro-de-llamadas/filtro-de-llamadas.component';
import { TablaDeLlamadasComponent } from './components/tabla-de-llamadas/tabla-de-llamadas.component';
import { VerDetalleLlamadaComponent } from './pages/detalle-de-llamada/ver-detalle.llamada.component';
import { DialogDeConfirmacionComponent } from 'src/app/core/components/dialog-de-confirmacion/dialog-de-confirmacion.component';
import { AgregarLlamadaComponent } from './pages/agregar-llamada/agregar-llamada.component';
import { FormularioDeLlamadasComponent } from './components/formulario-de-llamadas/formulario-de-llamadas.component';
import { TablaDeLlamadasPorClienteComponent } from './components/tabla-de-llamadas-por-cliente/tabla-de-llamadas-por-cliente.component';
import { TablaLlamadaLogComponent } from './components/tabla-llamada-log/tabla-llamada-log.component';
import { FiltroLlamadaLogComponent } from './components/filtro-llamada-log/filtro-llamada-log.component';
import { CardsLlamadasComponent } from './components/cards-llamadas/cards-llamadas.component';
import { DialogLlamadaLogComponent } from 'src/app/core/components/dialog-llamada-log/dialog-llamada-log.component';


@NgModule({
  declarations: [
    CallMonitoringComponent,
    FiltroDeLlamadasComponent,
    TablaDeLlamadasComponent,
    VerDetalleLlamadaComponent,
    DialogDeConfirmacionComponent,
    AgregarLlamadaComponent,
    FormularioDeLlamadasComponent,
    TablaDeLlamadasPorClienteComponent,
    TablaLlamadaLogComponent,
    FiltroLlamadaLogComponent,
    CardsLlamadasComponent,
    DialogLlamadaLogComponent
  ],
  imports: [
    CommonModule,
    CallMonitoringRoutingModule,
    SharedModule
  ]
})
export class CallMonitoringModule { }

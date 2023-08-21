import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReporteDeLlamadasComponent } from './pages/reporte-de-llamadas/reporte-de-llamadas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltroDeReporteDeLlamadasComponent } from './components/filtro-de-reporte-de-llamadas/filtro-de-reporte-de-llamadas.component';
import { TablaDeReporteDeLlamadasComponent } from './components/tabla-de-reporte-de-llamadas/tabla-de-reporte-de-llamadas.component';


@NgModule({
  declarations: [
    ReporteDeLlamadasComponent,
    FiltroDeReporteDeLlamadasComponent,
    TablaDeReporteDeLlamadasComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }

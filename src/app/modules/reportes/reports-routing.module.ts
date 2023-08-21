import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteDeLlamadasComponent } from './pages/reporte-de-llamadas/reporte-de-llamadas.component';

const routes: Routes = [
  {
    path: '',
    component: ReporteDeLlamadasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }

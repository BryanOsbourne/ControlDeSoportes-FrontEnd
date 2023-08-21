import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesorRoutingModule } from './asesor-routing.module';
import { AsesorComponent } from './pages/asesor/asesor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgregaAsesorComponent } from './pages/agregar-asesor/agrega-asesor.component';
import { TabAsesoresComponent } from './components/tab-asesores/tab-asesores.component';
import { TablaAsesoresComponent } from './components/tabla-asesores/tabla-asesores.component';
import { FormularioDeAsesoresComponent } from './components/formulario-de-asesores/formulario-de-asesores.component';

@NgModule({
  declarations: [
    AsesorComponent,
    AgregaAsesorComponent,
    TabAsesoresComponent,
    TablaAsesoresComponent,
    FormularioDeAsesoresComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    SharedModule
  ]
})
export class AsesorModule { }

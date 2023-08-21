import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientsComponent } from './pages/customer/customer.component';
import { TablaClientesComponent } from './components/tabla-clientes/tabla-clientes.component';
import { TabClientesComponent } from './components/tab-clientes/tab-clientes.component';
import { EdicionDeClientesComponent } from './pages/edicion-de-clientes/edicion-de-clientes.component';
import { TabEdicionDeClientesComponent } from './components/tab-edicion-de-clientes/tab-edicion-de-clientes.component';
import { FormularioDeClientesComponent } from './components/formulario-de-clientes/formulario-de-clientes.component';


@NgModule({
  declarations: [
    ClientsComponent,
    TablaClientesComponent,
    TabClientesComponent,
    EdicionDeClientesComponent,
    TabEdicionDeClientesComponent,
    FormularioDeClientesComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }

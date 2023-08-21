import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './pages/customer/customer.component';
import { EdicionDeClientesComponent } from './pages/edicion-de-clientes/edicion-de-clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent
  },
  {
    path: 'AgregarCliente',
    component: EdicionDeClientesComponent
  },
  {
    path: 'EditarCliente/:codigo',
    component: EdicionDeClientesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }

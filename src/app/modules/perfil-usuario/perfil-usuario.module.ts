import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilUsuarioRoutingModule } from './perfil-usuario-routing.module';
import { InformacionDeUsuarioComponent } from './components/informacion-de-usuario/informacion-de-usuario.component';
import { PerfilDeUsuarioComponent } from './pages/perfil-de-usuario/perfil-de-usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InformacionDeUsuarioComponent,
    PerfilDeUsuarioComponent
  ],
  imports: [
    CommonModule,
    PerfilUsuarioRoutingModule,
    SharedModule
  ]
})
export class PerfilUsuarioModule { }

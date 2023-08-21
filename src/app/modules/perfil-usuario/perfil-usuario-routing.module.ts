import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilDeUsuarioComponent } from './pages/perfil-de-usuario/perfil-de-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilDeUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilUsuarioRoutingModule { }

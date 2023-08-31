import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { RecuperacionDeContrasenaComponent } from './modules/authentication/pages/recuperacion-de-contrasena/recuperacion-de-contrasena.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Authentication',
    pathMatch: 'full'
  },
  {
    path: 'Authentication',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'Dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)//,
//    canActivate: [AuthenticationGuard]
  },
  {
    path: 'Authentication/ResetPassword',
    component : RecuperacionDeContrasenaComponent
  },
  {
    path: '**',
    redirectTo: 'Authentication',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

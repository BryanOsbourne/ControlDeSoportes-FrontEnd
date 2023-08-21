import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from '../home/pages/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'ControlDeLlamadas',
        loadChildren: () => import('../call-monitoring/call-monitoring.module').then(m => m.CallMonitoringModule),
      },
      {
        path: 'Clientes',
        loadChildren: () => import('../clients/clients.module').then(m => m.ClientsModule),
      },
      {
        path: 'Asesores',
        loadChildren: () => import('../asesor/asesor.module').then(m => m.AsesorModule),
      },
      {
        path: 'Perfil',
        loadChildren: () => import('../perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioModule),
      },
      {
        path: 'Reportes/Llamadas',
        loadChildren: () => import('../reportes/reports.module').then(m => m.ReportsModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }

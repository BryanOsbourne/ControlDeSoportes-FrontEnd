import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  cargarSideNav() {
    return [
      {
        header: 'Inicio',
        submenu: [
          {
            url: '/Dashboard',
            icon: 'home',
            descripcion: 'Dashboard'
          }
        ]
      },
      {
        header: 'Mi Perfil',
        submenu: [
          {
            url: 'Perfil',
            icon: 'account_circle',
            descripcion: 'Mi Perfil'
          }
        ]
      },
      {
        header: 'Control De Soportes',
        submenu: [
          {
            url: 'ControlDeLlamadas',
            icon: 'library_books',
            descripcion: 'Control De Llamadas'
          },
          {
            url: 'ControlDeLlamadas/AgregarLlamada',
            icon: 'phone_callback',
            descripcion: 'Registro De Llamadas'
          }
        ],
      },
      {
        header: 'Clientes',
        submenu: [
          {
            url: 'Clientes', 
            icon: 'contacts',
            descripcion: 'Clientes'
          },
          {
            url: 'Clientes/AgregarCliente',
            icon: 'group_add',
            descripcion: 'Edición De Clientes'
          }
        ],
      },
      {
        header: 'Asesores', 
        submenu: [
          {
            url: 'Asesores',
            icon: 'people_outline',
            descripcion: 'Asesores'
          },
          {
            url: 'Asesores/AgregarAsesor',
            icon: 'person_outline',
            descripcion: 'Edición De Asesores'
          }
        ],
      },
      {
        header: 'Reportes',
        submenu: [
          {
            url: 'Reportes/Llamadas',
            icon: 'library_books',
            descripcion: 'Informe De Llamadas'
          }
        ],
      },
    ];
  }
  
}

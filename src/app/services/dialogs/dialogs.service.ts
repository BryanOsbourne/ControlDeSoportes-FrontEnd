import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor() { }

  confirmationDialog() {
    return Swal.fire({
      title: '¿Está seguro de continuar con esta operación?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Deseo continuar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          '¡Operación Cancelada!',
          '',
          'error'
        );
        return false;
      }
      return false;
    });
  }

  saveDialog() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Operación Exitosa!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  errorDialog() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Oops... Algo salio mal',
      showConfirmButton: false,
      timer: 1500
    })
  }

  deleteConfirmedDialog() {
    return Swal.fire({
      title: '¿Está seguro de continuar con esta operación?',
      text: "¡No podrás revertir esta operacion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Deseo continuar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          '¡Operación Cancelada!',
          'No se elimino ningun registro',
          'error'
        );
        return false;
      }
      return false;
    });
  }

}

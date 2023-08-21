import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClientService } from 'src/app/services/cliente/client.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  displayedColumns: string[] = ['Codigo', 'Primer Nombre', 'Primer Apellido', 'Segundo Apellido', 'Razon Social', 'TipoIdentificacion', 'Identificacion', 'Version', 'Estado', 'Acciones'];
  datasource: MatTableDataSource<Cliente>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private clienteService: ClientService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.actualizarTabla();
  }

  actualizarTabla() {
    this.clienteService.listarClientes().subscribe(clientesEncontrados => {
      this.datasource = new MatTableDataSource(clientesEncontrados);
      this.datasource.paginator = this.paginator;
    });
  }

  filtrarClientes(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  eliminarCliente(id: number) {
    this._snackBar.open('No esta autorizado para realizar esta operacion', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  formatearFecha(fecha: Date) {
    return formatDate(fecha, 'dd/MM/yyy', 'en-ES');
  }

  verDetalleDeCliente(id: number) {
    this.router.navigate(["/Dashboard/VerDetalleDeCliente/", id]);
  }

}

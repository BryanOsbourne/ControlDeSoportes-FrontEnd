import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/core/models/customer';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent {

  public dataSource: MatTableDataSource<Customer>;
  public displayedColumns: string[] = [
    'Codigo', 'Primer Nombre', 'Primer Apellido', 'Segundo Apellido',
    'Razon Social', 'TipoIdentificacion', 'Identificacion',
    'Version', 'Estado', 'Acciones'
  ];
  // public columnsToDisplay: string[] = ['Codigo', 'Primer Nombre', 'Primer Apellido', 'Segundo Apellido', 'Razon Social', 'Tipo Identificacion', 'N° Identificacion', 'Version', 'Estado', 'Acciones',];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private matSnackBar: MatSnackBar) { }

  public updateTable(customers: Customer[]) {
    this.dataSource = new MatTableDataSource(customers);
    this.dataSource.paginator = this.paginator;
  }

  public filterTable(value: string) {
    this.dataSource.filter = value;
  }

  public deleteCustomer(id: number) {
    this.matSnackBar.open('No esta autorizado para realizar esta operacion', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  public formatDate(fecha: Date) {
    return formatDate(fecha, 'dd/MM/yyy', 'en-ES');
  }

}

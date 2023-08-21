import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Agent } from 'src/app/core/models/agent';

@Component({
  selector: 'app-tabla-asesores',
  templateUrl: './tabla-asesores.component.html',
  styleUrls: ['./tabla-asesores.component.css']
})
export class TablaAsesoresComponent {

  public dataSource: MatTableDataSource<Agent>;
  public displayedColumns: string[] = [
    'Foto', 'Primer Nombre', 'Primer Apellido',
    'Segundo Apellido', 'Tipo Identificacion', 'Identificacion',
    'Email', 'Tipo De Usuario', 'Estado', 'Acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private matSnackBar: MatSnackBar) { }

  public updateTable(agents: Agent[]) {
    this.dataSource = new MatTableDataSource(agents);
    this.dataSource.paginator = this.paginator;
  }

  public filterTable(value: string) {
    this.dataSource.filter = value;
  }

  public deletById(id: number) {
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

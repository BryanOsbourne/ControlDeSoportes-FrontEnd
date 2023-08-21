import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DialogDeConfirmacionComponent } from 'src/app/core/components/dialog-de-confirmacion/dialog-de-confirmacion.component';
import { Support } from 'src/app/core/models/support';

@Component({
  selector: 'app-tabla-de-reporte-de-llamadas',
  templateUrl: './tabla-de-reporte-de-llamadas.component.html',
  styleUrls: ['./tabla-de-reporte-de-llamadas.component.css']
})
export class TablaDeReporteDeLlamadasComponent {

  public dataSource: MatTableDataSource<Support>;
  public displayedColumns: string[] = [
    'Fecha/Hora', 'Consecutivo', 'Asesor', 
    'Codigo', 'Razon Social', 'Contacto', 
    'Telefono', 'Tipo De Soporte', 'Estado'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  public updateTable(supports: Support[]) {
    this.dataSource = new MatTableDataSource(supports);
    this.dataSource.paginator = this.paginator;
  }

  public filterTable(value: string) {
    this.dataSource.filter = value;
  }

  public formatDate(fecha: Date) {
    return formatDate(fecha, 'dd/MM/yyy', 'en-ES');
  }

}

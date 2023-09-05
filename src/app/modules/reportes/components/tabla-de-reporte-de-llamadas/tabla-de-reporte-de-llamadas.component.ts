import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Support } from 'src/app/core/models/support';

@Component({
  selector: 'app-tabla-de-reporte-de-llamadas',
  templateUrl: './tabla-de-reporte-de-llamadas.component.html',
  styleUrls: ['./tabla-de-reporte-de-llamadas.component.css']
})
export class TablaDeReporteDeLlamadasComponent {

  dataSource: MatTableDataSource<Support>;
  displayedColumns: string[] = [
    'Fecha/Hora', 'Consecutivo', 'Asesor',
    'Codigo', 'Razon Social', 'Contacto',
    'Telefono', 'Tipo De Soporte', 'Estado'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  updateTable(supports: Support[]) {
    this.dataSource = new MatTableDataSource(supports);
    this.dataSource.paginator = this.paginator;
  }

  filterTable(value: string) {
    this.dataSource.filter = value;
  }

  formatDate(fecha: Date) {
    return formatDate(fecha, 'dd/MM/yyy', 'en-ES');
  }

}

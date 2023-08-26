import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Support } from 'src/app/core/models/support';
import { DialogsService } from 'src/app/services/dialogs/dialogs.service';

@Component({
  selector: 'app-tabla-de-llamadas',
  templateUrl: './tabla-de-llamadas.component.html',
  styleUrls: ['./tabla-de-llamadas.component.css']
})

export class TablaDeLlamadasComponent {

  dataSource: MatTableDataSource<Support>;
  displayedColumns: string[] = [
    'Fecha/Hora', 'Consecutivo', 'Asesor',
    'Codigo', 'Razon Social', 'Contacto',
    'Telefono', 'Tipo De Soporte', 'Estado', 'Acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private matSnackBar: MatSnackBar,
    private dialogsService: DialogsService
  ) { }

  updateTable(supports: Support[]) {
    this.dataSource = new MatTableDataSource(supports);
    this.dataSource.paginator = this.paginator;
  }

  filterTable(value: string) {
    this.dataSource.filter = value;
  }

  deleteById(id: number) {
    this.matSnackBar.open('Llamada Eliminada', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  openConfirmationDialog(id: number) {
    this.dialogsService.deleteConfirmedDialog().then((confirmed) => {
      if (confirmed) {
        this.deleteById(id);
      }
    });
  }

  formatDate(fecha: Date) {
    return formatDate(fecha, 'dd/MM/yyy', 'en-ES');
  }

}

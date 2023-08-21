import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Support } from 'src/app/core/models/support';
import { DialogDeConfirmacionComponent } from 'src/app/core/components/dialog-de-confirmacion/dialog-de-confirmacion.component';

@Component({
  selector: 'app-tabla-de-llamadas',
  templateUrl: './tabla-de-llamadas.component.html',
  styleUrls: ['./tabla-de-llamadas.component.css']
})

export class TablaDeLlamadasComponent {

  public dataSource: MatTableDataSource<Support>;
  public displayedColumns: string[] = [
    'Fecha/Hora', 'Consecutivo', 'Asesor', 
    'Codigo', 'Razon Social', 'Contacto', 
    'Telefono', 'Tipo De Soporte', 'Estado', 'Acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog) { }

  public updateTable(supports: Support[]) {
    this.dataSource = new MatTableDataSource(supports);
    this.dataSource.paginator = this.paginator;
  }

  public filterTable(value: string) {
    this.dataSource.filter = value;
  }

  public deleteById(id: number) {
    this.matSnackBar.open('Llamada Eliminada', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  public openConfirmationDialog(id: number) {
    const dialogRef = this.matDialog.open(DialogDeConfirmacionComponent, {
      width: '30%',
      height: '22%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteById(id);
      }
    });
  }

  public formatDate(fecha: Date) {
    return formatDate(fecha, 'dd/MM/yyy', 'en-ES');
  }

}

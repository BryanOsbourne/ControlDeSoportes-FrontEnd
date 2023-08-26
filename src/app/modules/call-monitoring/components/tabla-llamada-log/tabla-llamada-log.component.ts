import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DialogLlamadaLogComponent } from 'src/app/core/components/dialog-llamada-log/dialog-llamada-log.component';
import { LogSupport } from 'src/app/core/models/logSupport';
import { LogsSupportService } from 'src/app/services/llamadalog/logSupport.service';

@Component({
  selector: 'app-tabla-llamada-log',
  templateUrl: './tabla-llamada-log.component.html',
  styleUrls: ['./tabla-llamada-log.component.css']
})
export class TablaLlamadaLogComponent {

  dataSource: MatTableDataSource<LogSupport>;
  displayedColumns: string[] = 
  ['Fecha/Hora', 'Asesor', 'Codigo', 
  'Razon Social', 'Contacto', 'Telefono', 
  'Tipo De Soporte', 'Estado', 'Ver'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog,
    private logSupportService: LogsSupportService
  ) { }

  updateTable(logSupports: LogSupport[]) {
    this.dataSource = new MatTableDataSource(logSupports);
    this.dataSource.paginator = this.paginator;
  }

  filterTable(value: string) {
    this.dataSource.filter = value;
  }

  formatDate(fecha: Date) {
    return formatDate(fecha, 'dd/MM/yyy hh:mm:ss', 'en-ES');
  }

  deleteById(id: number) {
    this.matSnackBar.open('No esta autorizado para realizar esta operacion', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  viewDatails(id: number) {
    this.logSupportService.buscarLogById(id).subscribe((logEncontrado) => {
      this.matDialog.open(DialogLlamadaLogComponent, {
        width: '100%',
        height: '90%',
        data: logEncontrado,
      });
    });
  }
  
}

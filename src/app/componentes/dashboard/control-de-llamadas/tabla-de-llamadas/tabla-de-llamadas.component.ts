import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Llamada } from 'src/app/models/llamada';
import { LlamadasService } from 'src/app/services/llamada/llamadas.service';
import { DialogDeConfirmacionComponent } from '../../dialogs/dialog-de-confirmacion/dialog-de-confirmacion.component';

@Component({
  selector: 'app-tabla-de-llamadas',
  templateUrl: './tabla-de-llamadas.component.html',
  styleUrls: ['./tabla-de-llamadas.component.css']
})
export class TablaDeLlamadasComponent {

  displayedColumns: string[] = ['Fecha/Hora', 'Consecutivo', 'Asesor', 'Codigo', 'Razon Social', 'Contacto', 'Telefono', 'Tipo De Soporte', 'Estado', 'Ver'];
  dataSource: MatTableDataSource<Llamada>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private llamadaService: LlamadasService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  onLlamadasFiltradas(llamadasFiltradas: Llamada[]) {
    this.dataSource = new MatTableDataSource(llamadasFiltradas);
    this.dataSource.paginator = this.paginator;
  }
  
  onCampoFiltrado(value : string){
    this.dataSource.filter = value;
  }

  eliminarLlamada(id: number) {
    this.llamadaService.eliminarLlamada(id);
    this._snackBar.open('Llamada Eliminada', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  openConfirmationDialog(id: number) {
    const dialogRef = this.dialog.open(DialogDeConfirmacionComponent, {
      width: '30%',
      height: '22%',
      data: { message: '¿Está seguro de realizar esta operacion?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eliminarLlamada(id);
      }
    });
  }

  formatearFecha(fecha: Date) {
    return formatDate(fecha, 'dd/MM/yyy', 'en-ES');
  }

  verDetalleDeLlamada(id: number) {
    this.router.navigate(['/Dashboard/VerDetalleDeLlamada/', id]);
  }

  agregarSeguimiento(id: number) {
    this.router.navigate(["/Dashboard/AgregarSeguimiento/", id]);
  }

}

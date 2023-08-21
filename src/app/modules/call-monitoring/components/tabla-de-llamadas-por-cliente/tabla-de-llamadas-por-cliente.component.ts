import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogLlamadaLogComponent } from 'src/app/core/components/dialog-llamada-log/dialog-llamada-log.component';
import { Support } from 'src/app/core/models/support';
import { SupportService } from 'src/app/services/llamadas/support.service';

@Component({
  selector: 'app-tabla-de-llamadas-por-cliente',
  templateUrl: './tabla-de-llamadas-por-cliente.component.html',
  styleUrls: ['./tabla-de-llamadas-por-cliente.component.css']
})
export class TablaDeLlamadasPorClienteComponent {

  public displayedColumns: string[] = ['Consecutivo', 'Fecha/Hora', 'Asesor', 'Codigo', 'Razon Social', 'Tipo De Soporte', 'Estado', 'Ver'];
  public dataSource: MatTableDataSource<Support>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private supportService: SupportService,
    private matDialog: MatDialog,
  ){ }

  public updateTable(supports: Support[]) {
    this.dataSource = new MatTableDataSource(supports);
    this.dataSource.paginator = this.paginator;
  }

  public viewDetails(id: number) {
    this.supportService.findById(id).subscribe(support => {
      this.matDialog.open(DialogLlamadaLogComponent, {
        width: '100%',
        height: '90%',
        data: support,
      });
    });
  }
  
  public formatDate(fecha: Date) {
    return formatDate(fecha, 'dd/MM/yyy hh:mm:ss', 'en-ES');
  }

}

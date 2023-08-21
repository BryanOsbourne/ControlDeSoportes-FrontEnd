import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogLlamadaLogComponent } from '../../dialogs/dialog-llamada-log/dialog-llamada-log.component';
import { LlamadaLogs } from 'src/app/models/llamadaLogs';
import { LlamadaLogsService } from 'src/app/services/llamadalog/llamada-logs.service';
import { AsesoresService } from 'src/app/services/asesor/asesores.service';
import { Asesor } from 'src/app/models/asesor';


@Component({
  selector: 'app-ver-detalle.llamada',
  templateUrl: './ver-detalle.llamada.component.html',
  styleUrls: ['./ver-detalle.llamada.component.css']
})
export class VerDetalleLlamadaComponent implements OnInit {

  id: number;
  displayedColumns: string[] = ['Fecha/Hora', 'Asesor', 'Codigo', 'Razon Social', 'Contacto', 'Telefono', 'Tipo De Soporte', 'Estado', 'Ver'];
  formulario: FormGroup;
  asesores: Asesor[];
  datasource: MatTableDataSource<LlamadaLogs>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private llamadaLogService: LlamadaLogsService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private asesorService: AsesoresService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.buscarLlamadasLog(this.id);
    this.formulario = this.formBuilder.group({
      fechaDesde: [new Date(), Validators.required],
      fechaHasta: [new Date(), Validators.required],
      asesor: ['0']
    })
    this.cargarAsesores();
  }

  private buscarLlamadasLog(consecutivo: number): void {
    this.llamadaLogService.buscarLogPorConsecutivoDeLlamada(consecutivo).subscribe(llamadasEncontradas => {
      this.actualizarTabla(llamadasEncontradas);
    });
  }

  private actualizarTabla(logs: LlamadaLogs[]): void {
    this.datasource = new MatTableDataSource(logs);
    this.datasource.paginator = this.paginator;
  }

  private cargarAsesores() {
    this.asesorService.listarActivos().subscribe(asesoresEncontrados => {
      this.asesores = asesoresEncontrados;
    }, error => console.error(error))
  }

  irAtras() {
    this.router.navigate(["/Dashboard/ControlDeLlamadas"]);
  }

  filtrarLlamadas(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  eliminarLog(id: number) {
    this._snackBar.open('No esta autorizado para realizar esta operacion', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  formatearFecha(fecha: Date) {
    return formatDate(fecha, 'dd/MM/yyy hh:mm:ss', 'en-ES');
  }

  agregarSeguimiento() {
    this.router.navigate(["/Dashboard/AgregarSeguimiento/", this.id]);
  }

  verDetalles(id: number) {
    this.llamadaLogService.buscarLogById(id).subscribe(logEncontrado => {
      this.dialog.open(DialogLlamadaLogComponent, {
        width: '90%',
        height: '90%',
        data: logEncontrado,
      });
    });
  }

  buscarSegunCriterios() {
    this.llamadaLogService.buscarLlamadaSegunCriterios(this.crearCriteriosDeContulta()).subscribe((llamadaLogs) => {
      this.datasource = new MatTableDataSource(llamadaLogs);
    }, (error) => {
      console.log(error);
    });
  }

  private crearCriteriosDeContulta() {
    const criterios = {
      idLlamadaLog: this.id,
      codigoAsesor: this.formulario.get('asesor')?.value,
      fechaDesde: this.formulario.get('fechaDesde')?.value.toISOString().substring(0, 10) + ' 00:00:01',
      fechaHasta: this.formulario.get('fechaHasta')?.value.toISOString().substring(0, 10) + ' 23:59:59'
    }
    return criterios;
  }

}

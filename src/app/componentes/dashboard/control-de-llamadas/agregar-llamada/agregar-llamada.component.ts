import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';
import { DialogDeConfirmacionComponent } from 'src/app/componentes/dashboard/dialogs/dialog-de-confirmacion/dialog-de-confirmacion.component';
import { Asesor } from 'src/app/models/asesor';
import { Cliente } from 'src/app/models/cliente';
import { Llamada } from 'src/app/models/llamada';
import { AsesoresService } from 'src/app/services/asesor/asesores.service';
import { ClientService } from 'src/app/services/cliente/client.service';
import { LlamadasService } from 'src/app/services/llamada/llamadas.service';
import { DialogLlamadaLogComponent } from '../../dialogs/dialog-llamada-log/dialog-llamada-log.component';

@Component({
  selector: 'app-agregar-llamada',
  templateUrl: './agregar-llamada.component.html',
  styleUrls: ['./agregar-llamada.component.css']
})

export class AgregarLlamadaComponent implements OnInit {

  tablaOculta = false;
  displayedColumns: string[] = ['Consecutivo', 'Asesor', 'Codigo', 'Razon Social', 'Tipo De Soporte', 'Estado', 'Ver'];
  asesores: Asesor[];
  clientes: Cliente[];
  datasource: MatTableDataSource<Llamada>;
  formularioDeLlamada: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private llamadaService: LlamadasService,
    private clienteService: ClientService,
    private asesorService: AsesoresService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.formularioDeLlamada = this.formBuilder.group({
      consecutivo: [''],
      fechaInicio: [new Date(), Validators.required],
      horaInicio: ['', Validators.required],
      fechaFin: [new Date()],
      horaFin: [''],
      asesor: ['', Validators.required],
      codigo: ['', Validators.required],
      razonSocial: ['', Validators.required],
      contacto: ['', Validators.required],
      telefono: [''],
      tipoSoporte: ['', Validators.required],
      detalle: ['', Validators.required],
      observacion: ['', Validators.required],
      estado: ['', Validators.required]
    })
    const id = this.route.snapshot.params['id'];
    this.listarAsesores();
    this.listarClientes();
    this.seleccionarCodigoCliente();
    this.buscarLlamadaPorCodigo(id);
  }

  private buscarLlamadaPorCodigo(id: number) {
    if (!id) {
      return;
    }
    this.llamadaService.buscarLlamadaPorId(id).subscribe(llamadaEncontrada => {
      this.tablaOculta = true;
      this.formularioDeLlamada.setValue({
        consecutivo: llamadaEncontrada.consecutivo,
        fechaInicio: llamadaEncontrada.fechaInicio,
        horaInicio: llamadaEncontrada.horaInicio,
        fechaFin: llamadaEncontrada.fechaFin,
        horaFin: llamadaEncontrada.horaFin,
        asesor: llamadaEncontrada.asesor.id,
        codigo: llamadaEncontrada.cliente.codigo,
        razonSocial: llamadaEncontrada.cliente.razonSocial,
        contacto: llamadaEncontrada.contacto,
        telefono: llamadaEncontrada.telefono,
        tipoSoporte: llamadaEncontrada.tipoSoporte,
        detalle: llamadaEncontrada.detalle,
        observacion: llamadaEncontrada.observacion,
        estado: llamadaEncontrada.estado
      });
    });
  }

  private seleccionarCodigoCliente(): void {
    this.formularioDeLlamada.get('codigo')?.valueChanges.pipe(distinctUntilChanged()).subscribe(codigoSeleccionado => {
      const cliente = this.clientes.find(item => item.codigo == codigoSeleccionado);

      if (!cliente) {
        this.datasource.data = [];
        return;
      }
      this.actualizarFormulario(cliente);
      this.llamadaService.buscarLlamadaPorCliente(cliente.id).subscribe(llamadasEncontradas => {
        this.actualizarTabla(llamadasEncontradas);
      });
    }, error => console.log(error));
  }

  private listarAsesores() {
    this.asesorService.listarActivos().subscribe(asesoresEncontrados => {
      this.asesores = asesoresEncontrados;
    }, error => console.error(error))
  }

  private listarClientes() {
    this.clienteService.listarClientesActivos().subscribe(clientesEncontrados => {
      this.clientes = clientesEncontrados;
    }, error => console.error(error))
  }

  private actualizarFormulario(cliente: Cliente): void {
    this.formularioDeLlamada.patchValue({
      codigo: cliente.codigo,
      razonSocial: cliente.razonSocial
    });
  }

  private actualizarTabla(llamadas: Llamada[]): void {
    this.datasource = new MatTableDataSource(llamadas);
    this.datasource.paginator = this.paginator;
  }

  /*  upload(event:any){
      const file = event.target.files[0];   
      if(file){
        this.formData.append('file', file);      
      }
    }*/

  registrarLlamada() {
    const { consecutivo, estado, tipoSoporte, fechaInicio, contacto, detalle, fechaFin, observacion, telefono, codigo, horaInicio, horaFin } = this.formularioDeLlamada.value;
    const asesor = this.asesores.find(item => item.id == this.formularioDeLlamada.value.asesor);
    const cliente = this.clientes.find(item => item.codigo == codigo);

    if (!asesor || !cliente) {
      return;
    }

    const llamada: Llamada = {
      consecutivo,
      fechaInicio,
      horaInicio,
      asesor,
      cliente,
      tipoSoporte,
      contacto,
      telefono,
      detalle,
      observacion,
      fechaFin,
      horaFin,
      estado
    };

    this.llamadaService.registrarLlamada(llamada).subscribe(() => {
      this._snackBar.open('Llamada Registrada Exitosamente', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      this.router.navigate(["/Dashboard/ControlDeLlamadas"]);
    },
      error => console.log(error));
  }

  filtrarLlamadas(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  eliminarLlamada(id: number) {
    this._snackBar.open('No esta autorizado para realizar esta operacion', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(DialogDeConfirmacionComponent, {
      width: '30%',
      height: '22%',
      data: { message: '¿Estás seguro que deseas realizar esta acción?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.registrarLlamada();
      }
    });
  }

  verDetalles(id: number) {
    this.llamadaService.buscarLlamadaPorId(id).subscribe(llamadaEncontrada => {
      this.dialog.open(DialogLlamadaLogComponent, {
        width: '30%',
        height: '22%',
        data: llamadaEncontrada,
      });
    });
  }

  irAtras() {
    this.router.navigate(['/Dashboard/ControlDeLlamadas']);
  }

}

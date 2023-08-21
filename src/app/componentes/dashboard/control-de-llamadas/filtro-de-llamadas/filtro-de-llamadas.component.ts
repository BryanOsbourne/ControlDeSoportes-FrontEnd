import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Asesor } from 'src/app/models/asesor';
import { Cliente } from 'src/app/models/cliente';
import { Llamada } from 'src/app/models/llamada';
import { AsesoresService } from 'src/app/services/asesor/asesores.service';
import { ClientService } from 'src/app/services/cliente/client.service';
import { LlamadasService } from 'src/app/services/llamada/llamadas.service';

@Component({
  selector: 'app-filtro-de-llamadas',
  templateUrl: './filtro-de-llamadas.component.html',
  styleUrls: ['./filtro-de-llamadas.component.css']
})

export class FiltroDeLlamadasComponent implements OnInit {

  @Output() llamadasFiltradas = new EventEmitter<Llamada[]>();
  @Output() campoDeFiltro = new EventEmitter<string>();
  formulario: FormGroup;
  asesores: Asesor[];
  clientes: Cliente[];
  llamadas: Llamada[];

  constructor(private router: Router,
    private clienteService: ClientService,
    private asesorService: AsesoresService,
    private formBuilder: FormBuilder,
    private llamadaService: LlamadasService) {
  }

  ngOnInit(): void {
    this.formInit();
    this.cargarAsesores();
    this.cargarClientes();
    this.ejecutarConsulta();
  }

  private formInit() {
    this.formulario = this.formBuilder.group({
      fechaDesde: [new Date()],
      fechaHasta: [new Date()],
      tipoSoporte: ['0'],
      estado: ['0'],
      asesor: ['0'],
      cliente: ['0'],
      horaDesde: ['00:00'],
      horaHasta: ['23:59']
    })
  }

  private cargarAsesores() {
    this.asesorService.listarActivos().subscribe(asesoresActivos => {
      this.asesores = asesoresActivos;
    }, (error) => console.log(error))
  }

  private cargarClientes() {
    this.clienteService.listarClientesActivos().subscribe(clientesActivos => {
      this.clientes = clientesActivos;
    }, (error) => console.log(error))
  }

  ejecutarConsulta() {
    this.llamadaService.buscarLlamadaSegunCriterios(this.crearCriteriosDeContulta()).subscribe((llamadasObtenidas) => {
      this.llamadasFiltradas.emit(llamadasObtenidas);
    }, (error) => {
      console.log(error);
    });
  }

  private crearCriteriosDeContulta() {
    const criterios = {
      codigoAsesor: this.formulario.get('asesor')?.value,
      codigoCliente: this.formulario.get('cliente')?.value,
      estado: this.formulario.get('estado')?.value,
      tipo: this.formulario.get('tipoSoporte')?.value,
      fechaDesde: this.formulario.get('fechaDesde')?.value.toISOString().substring(0, 10) + ' ' + this.formulario.get('horaDesde')?.value + ':01',
      fechaHasta: this.formulario.get('fechaHasta')?.value.toISOString().substring(0, 10) + ' ' + this.formulario.get('horaHasta')?.value + ':59',
    }
    return criterios;
  }

  filtrarLlamadas(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.campoDeFiltro.emit(filterValue.trim().toLowerCase());
  }

  agregarNuevaLlamada() {
    this.router.navigate(['/Dashboard/AgregarLlamada']);
  }

}

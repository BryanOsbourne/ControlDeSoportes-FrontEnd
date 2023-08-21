import { Component, OnInit } from '@angular/core';
import { Asesor } from 'src/app/models/asesor';
import { Cliente } from 'src/app/models/cliente';
import { AsesoresService } from 'src/app/services/asesor/asesores.service';
import { ClientService } from 'src/app/services/cliente/client.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  public asesores: Asesor[];
  public clientes: Cliente[];

  constructor(
    private asesorService: AsesoresService,
    private clienteService: ClientService
    ) { }

  ngOnInit(): void {
    this.asesorService.listarAsesores().subscribe(data => {
      this.asesores = data;
    });

    this.clienteService.listarClientes().subscribe(data =>{
      this.clientes = data;
    });
  }

}

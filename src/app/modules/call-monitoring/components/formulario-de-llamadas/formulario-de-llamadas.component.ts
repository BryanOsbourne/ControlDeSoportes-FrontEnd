import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';
import { Agent } from 'src/app/core/models/agent';
import { Customer } from 'src/app/core/models/customer';
import { Support } from 'src/app/core/models/support';
import { AgentService } from 'src/app/services/asesores/agent.service';
import { CustomerService } from 'src/app/services/clients/customer.service';
import { DialogsService } from 'src/app/services/dialogs/dialogs.service';
import { SupportService } from 'src/app/services/llamadas/support.service';

@Component({
  selector: 'app-formulario-de-llamadas',
  templateUrl: './formulario-de-llamadas.component.html',
  styleUrls: ['./formulario-de-llamadas.component.css']
})
export class FormularioDeLlamadasComponent implements OnInit {

  formGroup: FormGroup;
  agents: Agent[];
  customers: Customer[];
  dataSource: MatTableDataSource<Support>;
  customerFound: Customer | undefined;

  @Output() llamadasEncontradas = new EventEmitter<Support[]>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    private supportService: SupportService,
    private customerService: CustomerService,
    private agentService: AgentService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private dialogsService: DialogsService
  ) { }

  ngOnInit() {
    const id = this.activateRoute.snapshot.params['id'];
    this.formInit();
    this.loadAgents();
    this.loadCustomers();
    this.findById(id);
  }

  formInit() {
    this.formGroup = this.formBuilder.group({
      id: [''],
      startDate: [new Date(), Validators.required],
      startTime: ['', Validators.required],
      endDate: [new Date()],
      endTime: [''],
      agent: ['', Validators.required],
      codigo: ['', Validators.required],
      contact: ['', Validators.required],
      phone: [''],
      supportType: ['', Validators.required],
      detail: ['', Validators.required],
      observation: ['', Validators.required],
      state: ['', Validators.required]
    })
  }

  loadAgents() {
    this.agentService.findActives().subscribe((agents) => {
      this.agents = agents;
    })
  }

  loadCustomers() {
    this.customerService.findCustomerActive().subscribe((customers) => {
      this.customers = customers;
    })
  }

  findById(id: number) {
    if (id) {
      this.supportService.findById(id).subscribe((support) => {
        this.customerFound = support.customer;
        this.formGroup.setValue({
          id: this.customerFound.id,
          startDate: support.startDate,
          startTime: support.startTime,
          endDate: support.endDate,
          endTime: support.endTime,
          agent: support.agent.id,
          codigo: this.customerFound.codigo,
          contact: support.contact,
          phone: support.phone,
          supportType: support.supportType,
          detail: support.detail,
          observation: support.observation,
          state: support.state
        });
      });
      this.findCustomerByCodigo();
    }
  }

  findCustomerByCodigo() {
    this.formGroup.get('codigo')?.valueChanges.pipe(distinctUntilChanged()).subscribe(codigoSeleccionado => {
      const customer = this.customers.find(item => item.codigo == codigoSeleccionado);
      if (customer) {
        this.customerFound = customer;
        this.findSupportByCustomer(this.customerFound);
      }
    });
  }

  findSupportByCustomer(customer: Customer) {
    if (!customer) {
      this.dataSource.data = [];
      return
    }
    this.supportService.findByCustomer(customer.id).subscribe(supports => {
      this.llamadasEncontradas.emit(supports);
    });
  }

  openConfirmedDialog() {
    this.dialogsService.successConfirmedDialog().then((confirmed) => {
      if (confirmed) {
        this.save()
      }
    });
  }

  save() {
    const { id, startDate, startTime, supportType, contact, phone, detail, observation, endDate, endTime, state, codigo } = this.formGroup.value;
    const agent = this.agents.find(item => item.id == this.formGroup.value.agent);
    const customer = this.customers.find(item => item.codigo == codigo);

    if (agent && customer) {
      const support: Support = {
        id,
        startDate,
        startTime,
        agent,
        customer,
        supportType,
        contact,
        phone,
        detail,
        observation,
        endDate,
        endTime,
        state
      };

      this.supportService.save(support).subscribe(() => {
        this.router.navigate(["/Dashboard/ControlDeLlamadas"]);
      });
      
    }
  }

}



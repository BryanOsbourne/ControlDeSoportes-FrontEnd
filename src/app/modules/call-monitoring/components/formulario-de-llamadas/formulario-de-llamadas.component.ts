import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, distinctUntilChanged } from 'rxjs';
import { Agent } from 'src/app/core/models/agent';
import { Customer } from 'src/app/core/models/customer';
import { Support } from 'src/app/core/models/support';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
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
  customers: Customer[];
  dataSource: MatTableDataSource<Support>;
  customerFound: Customer | undefined;
  agentContected: Agent;
  subscriptions: Array<Subscription> = new Array();

  @Output() llamadasEncontradas = new EventEmitter<Support[]>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    private supportService: SupportService,
    private customerService: CustomerService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private dialogsService: DialogsService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    const id = this.activateRoute.snapshot.params['id'];
    this.loadAgent();
    this.formInit();
    this.loadCustomers();
    this.findById(id);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  formInit() {
    this.formGroup = this.formBuilder.group({
      id: [''],
      startDate: [new Date(), Validators.required],
      startTime: ['', Validators.required],
      endDate: [new Date()],
      endTime: [''],
      agent: [this.agentContected.firstName, Validators.required],
      codigo: ['', Validators.required],
      contact: ['', Validators.required],
      phone: [''],
      supportType: ['', Validators.required],
      detail: ['', Validators.required],
      observation: ['', Validators.required],
      state: ['', Validators.required]
    })
  }

  loadAgent() {
    this.agentContected = this.authenticationService.getUserToken();
  }

  loadCustomers() {
    this.subscriptions.push(
      this.customerService.findCustomerActive().subscribe((customers) => {
        this.customers = customers;
      })
    );
  }

  findById(id: number) {
    if (id) {
      this.subscriptions.push(
        this.supportService.findById(id).subscribe((support) => {
          this.customerFound = support.customer;
          this.formGroup.setValue({
            id: support.id,
            startDate: support.startDate,
            startTime: support.startTime,
            endDate: support.endDate,
            endTime: support.endTime,
            agent: support.agent.firstName,
            codigo: this.customerFound.codigo,
            contact: support.contact,
            phone: support.phone,
            supportType: support.supportType,
            detail: support.detail,
            observation: support.observation,
            state: support.state
          });
        })
      );
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
      return;
    }
    this.dialogsService.loadDialog().then((confirmed) => {
      if (confirmed) {
        this.subscriptions.push(
          this.supportService.findByCustomer(customer.id).subscribe(supports => {
            this.llamadasEncontradas.emit(supports);
          })
        );
      }
    })
  }

  openConfirmedDialog() {
    this.dialogsService.confirmationDialog().then((confirmed) => {
      if (confirmed) {
        this.save()
      }
    });
  }

  save() {
    const { id, startDate, startTime, supportType, contact, phone, detail, observation, endDate, endTime, state, codigo } = this.formGroup.value;
    const agent = this.agentContected;
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

      this.subscriptions.push(
        this.supportService.save(support).subscribe((support) => {
          if (support) {
            this.dialogsService.saveDialog();
            this.router.navigate(["/Dashboard/ControlDeLlamadas"]);
          } else {
            this.dialogsService.errorDialog();
          }
        }, () => this.dialogsService.errorDialog())
      );
    }
  }

}



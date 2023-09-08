import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Agent } from 'src/app/core/models/agent';
import { Customer } from 'src/app/core/models/customer';
import { Support } from 'src/app/core/models/support';
import { AgentService } from 'src/app/services/asesores/agent.service';
import { CustomerService } from 'src/app/services/clients/customer.service';
import { SupportService } from 'src/app/services/llamadas/support.service';

@Component({
  selector: 'app-filtro-de-llamadas',
  templateUrl: './filtro-de-llamadas.component.html',
  styleUrls: ['./filtro-de-llamadas.component.css']
})

export class FiltroDeLlamadasComponent implements OnInit {

  formGroup: FormGroup;
  agents: Agent[];
  customers: Customer[];
  supports: Support[];
  subscriptions: Array<Subscription> = new Array();

  @Output() supportsFilter = new EventEmitter<Support[]>();
  @Output() filterField = new EventEmitter<string>();

  constructor(
    private customerService: CustomerService,
    private agentService: AgentService,
    private formBuilder: FormBuilder,
    private supportService: SupportService) {
  }

  ngOnInit() {
    this.formInit();
    this.loadAgents();
    this.loadCustomers();
    this.generateQuery();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  formInit() {
    this.formGroup = this.formBuilder.group({
      startDate: [new Date()],
      endDate: [new Date()],
      supportType: [],
      state: [''],
      agent: [0],
      customer: [0]
    })
  }

  loadAgents() {
    this.subscriptions.push(
      this.agentService.findActives().subscribe((agentActives) => {
        this.agents = agentActives;
      })
    );
  }

  loadCustomers() {
    this.subscriptions.push(
      this.customerService.findCustomerActive().subscribe((customerActives) => {
        this.customers = customerActives;
      })
    );
  }

  generateQuery() {
    this.subscriptions.push(
      this.supportService.findByCriteria(this.getCriteria()).subscribe((supports) => {
        this.supportsFilter.emit(supports);
      })
    );
  }

  getCriteria() {
    const criterias = {
      agentId: this.formGroup.value.agent,
      customerId: this.formGroup.value.customer,
      state: this.formGroup.value.state,
      supportType: this.formGroup.value.supportType,
      startDate: this.formGroup.value.startDate.toISOString().substring(0, 10),
      endDate: this.formGroup.value.endDate.toISOString().substring(0, 10),
    }
    return criterias;
  }

  filterSupport(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterField.emit(filterValue.trim().toLowerCase());
  }

}

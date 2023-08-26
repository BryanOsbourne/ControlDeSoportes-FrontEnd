import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Agent } from 'src/app/core/models/agent';
import { Customer } from 'src/app/core/models/customer';
import { Support } from 'src/app/core/models/support';
import { AgentService } from 'src/app/services/asesores/agent.service';
import { CustomerService } from 'src/app/services/clients/customer.service';
import { SupportService } from 'src/app/services/llamadas/support.service';
import { ReportService } from 'src/app/services/reportes/report.service';

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

  @Output() supportsFilter = new EventEmitter<Support[]>();
  @Output() filterField = new EventEmitter<string>();

  constructor(
    private customerService: CustomerService,
    private agentService: AgentService,
    private formBuilder: FormBuilder,
    private supportService: SupportService,
    private reportService: ReportService) {
  }

  ngOnInit() {
    this.formInit();
    this.loadAgents();
    this.loadCustomers();
    this.generateQuery();
  }

  formInit() {
    this.formGroup = this.formBuilder.group({
      startDate: [new Date()],
      endDate: [new Date()],
      supportType: [],
      state: [''],
      agent: [0],
      customer: [0],
      startTime: ['00:00'],
      endTime: ['23:59']
    })
  }

  loadAgents() {
    this.agentService.findActives().subscribe((agentActives) => {
      this.agents = agentActives;
    })
  }

  loadCustomers() {
    this.customerService.findCustomerActive().subscribe((customerActives) => {
      this.customers = customerActives;
    })
  }

  generateQuery() {
    this.supportService.findByCriteria(this.getCriteria()).subscribe((supports) => {
      this.supportsFilter.emit(supports);
    });
  }

  getCriteria() {
    const criterias = {
      agentId: this.formGroup.value.agent,
      customerId: this.formGroup.value.customer,
      state: this.formGroup.value.state,
      supportType: this.formGroup.value.supportType,
      startDate: this.formGroup.value.startDate.toISOString().substring(0, 10) + ' ' + this.formGroup.value.startTime + ':01',
      endDate: this.formGroup.value.endDate.toISOString().substring(0, 10) + ' ' + this.formGroup.value.endTime + ':59',
    }
    return criterias;
  }

  filterSupport(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterField.emit(filterValue.trim().toLowerCase());
  }

}

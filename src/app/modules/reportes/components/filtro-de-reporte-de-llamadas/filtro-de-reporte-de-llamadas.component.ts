import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Agent } from 'src/app/core/models/agent';
import { Customer } from 'src/app/core/models/customer';
import { Support } from 'src/app/core/models/support';
import { AgentService } from 'src/app/services/asesores/agent.service';
import { CustomerService } from 'src/app/services/clients/customer.service';
import { SupportService } from 'src/app/services/llamadas/support.service';
import { ReportService } from 'src/app/services/reportes/report.service';

@Component({
  selector: 'app-filtro-de-reporte-de-llamadas',
  templateUrl: './filtro-de-reporte-de-llamadas.component.html',
  styleUrls: ['./filtro-de-reporte-de-llamadas.component.css']
})
export class FiltroDeReporteDeLlamadasComponent {

  public formGroup: FormGroup;
  public agents: Agent[];
  public customers: Customer[];
  public supports: Support[];

  @Output() supportsFilter = new EventEmitter<Support[]>();

  constructor(
    private customerService: CustomerService,
    private agentService: AgentService,
    private formBuilder: FormBuilder,
    private supportService: SupportService,
    private reportService: ReportService) {
  }

  public ngOnInit() {
    this.formInit();
    this.loadAgents();
    this.loadCustomers();
  }

  private formInit() {
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

  private loadAgents() {
    this.agentService.findActives().subscribe((agentActives) => {
      this.agents = agentActives;
    })
  }

  private loadCustomers() {
    this.customerService.findCustomerActive().subscribe((customerActives) => {
      this.customers = customerActives;
    })
  }

  public generateQuery() {
    this.supportService.findByCriteria(this.getCriteria()).subscribe((supports) => {
      this.supportsFilter.emit(supports);
    });
  }

  private getCriteria() {
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

  public downloadExcel() {
    this.reportService.getReport(this.getCriteria()).subscribe((response) => {
      this.reportService.manageExcelFile(response, "Soportes")
    });
  }
  
}

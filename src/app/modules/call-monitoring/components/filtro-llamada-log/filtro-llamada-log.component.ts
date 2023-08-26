import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Agent } from 'src/app/core/models/agent';
import { LogSupport } from 'src/app/core/models/logSupport';
import { AgentService } from 'src/app/services/asesores/agent.service';
import { LogsSupportService } from 'src/app/services/llamadalog/logSupport.service';

@Component({
  selector: 'app-filtro-llamada-log',
  templateUrl: './filtro-llamada-log.component.html',
  styleUrls: ['./filtro-llamada-log.component.css']
})

export class FiltroLlamadaLogComponent implements OnInit {

  id: number;
  formGroup: FormGroup;
  agents: Agent[];

  @Output() llamadasFiltradas = new EventEmitter<LogSupport[]>();
  @Output() campoDeFiltro = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
    private logsSupportService: LogsSupportService,
    private activatedRoute: ActivatedRoute,
    private agentService: AgentService) { }

  ngOnInit() {
    this.formInit();
    this.loadAgents();
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.findLogSupportById(this.id);
    });
  }

  formInit() {
    this.formGroup = this.formBuilder.group({
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      agent: [0]
    })
  }

  loadAgents() {
    this.agentService.findActives().subscribe(agents => {
      this.agents = agents;
    })
  }

  findLogSupportById(supportId: number) {
    this.logsSupportService.fingLogByIdSupport(supportId).subscribe(logSupports => {
      this.llamadasFiltradas.emit(logSupports);
    });
  }

  findByCriterias() {
    this.logsSupportService.findByCriterias(this.getCriterias()).subscribe((logs) => {
      this.llamadasFiltradas.emit(logs);
    });
  }

  getCriterias() {
    const criterias = {
      agentId: this.formGroup.value.agent,
      supportId: this.id,
      startDate: this.formGroup.value.startDate.toISOString().substring(0, 10) + ' 00:00:01',
      endDate: this.formGroup.value.endDate.toISOString().substring(0, 10) + ' 23:59:59'
    }
    return criterias;
  }

  filterSupport(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.campoDeFiltro.emit(filterValue.trim().toLowerCase());
  }

}

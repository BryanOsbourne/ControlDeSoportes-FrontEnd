import { Component, EventEmitter, Output } from '@angular/core';
import { AgentService } from 'src/app/services/asesores/agent.service';

@Component({
  selector: 'app-tab-asesores',
  templateUrl: './tab-asesores.component.html',
  styleUrls: ['./tab-asesores.component.css']
})
export class TabAsesoresComponent {

  @Output() filterField = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<any>();

  constructor(private agentService: AgentService) { }

  public ngOnInit(): void {
    this.updateTable();
  }

  public agentFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterField.emit(filterValue.trim().toLowerCase());
  }

  public updateTable() {
    this.agentService.findAll().subscribe((asesoresObtenidos) => {
      this.refresh.emit(asesoresObtenidos);
    });
  }
  
}

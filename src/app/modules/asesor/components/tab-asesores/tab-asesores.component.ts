import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AgentService } from 'src/app/services/asesores/agent.service';

@Component({
  selector: 'app-tab-asesores',
  templateUrl: './tab-asesores.component.html',
  styleUrls: ['./tab-asesores.component.css']
})
export class TabAsesoresComponent {

  @Output() filterField = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<any>();
  subscriptions: Array<Subscription> = new Array();

  constructor(private agentService: AgentService) { }

  ngOnInit() {
    this.updateTable();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  agentFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterField.emit(filterValue.trim().toLowerCase());
  }

  updateTable() {
    this.subscriptions.push(
      this.agentService.findAll().subscribe((asesoresObtenidos) => {
        this.refresh.emit(asesoresObtenidos)
      })
    );
  }

}

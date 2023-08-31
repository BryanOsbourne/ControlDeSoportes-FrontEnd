import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/clients/customer.service';

@Component({
  selector: 'app-tab-clientes',
  templateUrl: './tab-clientes.component.html',
  styleUrls: ['./tab-clientes.component.css']
})
export class TabClientesComponent implements OnInit {

  @Output() filterField = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<any>();
  subscriptions: Array<Subscription> = new Array();

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.updateTable();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  customerFilterField(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterField.emit(filterValue.trim().toLowerCase());
  }

  updateTable() {
    this.subscriptions.push(
      this.customerService.findAll().subscribe((customers) => {
        this.refresh.emit(customers)
      })
    );
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerService } from 'src/app/services/clients/customer.service';

@Component({
  selector: 'app-tab-clientes',
  templateUrl: './tab-clientes.component.html',
  styleUrls: ['./tab-clientes.component.css']
})
export class TabClientesComponent implements OnInit {

  @Output() filterField = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<any>();

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.updateTable();
  }

  customerFilterField(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterField.emit(filterValue.trim().toLowerCase());
  }

  updateTable() {
    this.customerService.findAll().subscribe((customers) => {
      this.refresh.emit(customers);
    }
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/core/models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  URL_BASE = "/customers";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(environment.urlBase + this.URL_BASE + '/findAll');
  }

  findByCodigo(codigo: number): Observable<Customer> {
    return this.httpClient.get<Customer>(environment.urlBase + this.URL_BASE + '/findByCodigo?codigo=' + codigo);
  }

  saveCustomer(cliente: Customer) {
    return this.httpClient.post(environment.urlBase + this.URL_BASE + '/save', cliente);
  }

  findCustomerActive(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(environment.urlBase + this.URL_BASE + '/findActives');
  }

}

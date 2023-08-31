import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_SERVICE } from 'src/app/core/constants/serverConstans';
import { Customer } from 'src/app/core/models/customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  URL_BASE = API_SERVICE + "/customers";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_BASE + '/findAll');
  }

  findByCodigo(codigo: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.URL_BASE + '/findByCodigo?codigo=' + codigo);
  }

  saveCustomer(cliente: Customer) {
    return this.httpClient.post(this.URL_BASE + '/save', cliente);
  }

  findCustomerActive(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_BASE + '/findActives');
  }

}

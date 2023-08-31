import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Support } from 'src/app/core/models/support';
import { API_SERVICE } from 'src/app/core/constants/serverConstans';

@Injectable({
  providedIn: 'root'
})

export class SupportService {

  URL_BASE = API_SERVICE  +"/supports";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Support[]> {
    return this.httpClient.get<Support[]>(this.URL_BASE + '/findAll');
  }

  save(llamada: Support) {
    return this.httpClient.post(this.URL_BASE + '/save', llamada);
  }

  findById(id: number): Observable<Support> {
    return this.httpClient.get<Support>(this.URL_BASE + '/findById?id=' + id);
  }

  findByCustomer(idCustomer: number): Observable<Support[]> {
    return this.httpClient.get<Support[]>(this.URL_BASE + '/findAllByCustomerId?customerId=' + idCustomer);
  }

  findByCriteria(criterias: any): Observable<Support[]> {
    const params = {
      params: {
        agentId: criterias.agentId,
        customerId: criterias.customerId,
        state: criterias.state,
        supportType: criterias.supportType,
        startDate: criterias.startDate,
        endDate: criterias.endDate,
      }
    };
    return this.httpClient.get<Support[]>(this.URL_BASE + '/findByCriterias', params);
  }




}



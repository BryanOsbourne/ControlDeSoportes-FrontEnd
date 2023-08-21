import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogSupport } from 'src/app/core/models/logSupport';

@Injectable({
  providedIn: 'root'
})

export class LogsSupportService {

  private URL_BASE_AUTHENTICATION = "http://localhost:8080/v1/app-ticket-trace/log-supports";

  constructor(private httpClient: HttpClient) { }

  public buscarLogById(id: number): Observable<LogSupport> {
    return this.httpClient.get<LogSupport>(this.URL_BASE_AUTHENTICATION + '/findById?id=' + id);
  }

  public fingLogByIdSupport(id: number): Observable<LogSupport[]> {
    return this.httpClient.get<LogSupport[]>(this.URL_BASE_AUTHENTICATION + '/findAllBySupportId?supportId=' + id);
  }

  public findByCriterias(criterias: any): Observable<LogSupport[]> {
    const params = {
      params: {
        agentId: criterias.agentId,
        supportId: criterias.supportId,
        startDate: criterias.startDate,
        endDate: criterias.endDate
      }
    };
    return this.httpClient.get<LogSupport[]>(this.URL_BASE_AUTHENTICATION + '/findByCriterias', params);
  }

}

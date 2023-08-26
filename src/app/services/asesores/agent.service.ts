import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Agent } from 'src/app/core/models/agent';

@Injectable({
  providedIn: 'root'
})

export class AgentService {

  URL_BASE_AUTHENTICATION = "http://localhost:8080/v1/app-ticket-trace/authentication";
  URL_BASE_AGENT = "http://localhost:8080/v1/app-ticket-trace/agents";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Agent[]> {
    return this.httpClient.get<Agent[]>(this.URL_BASE_AGENT + '/findAll');
  }

  findActives(): Observable<Agent[]> {
    return this.httpClient.get<Agent[]>(this.URL_BASE_AGENT + '/findActives');
  }

  save(asesor: Agent) {
    return this.httpClient.post<Agent>(this.URL_BASE_AUTHENTICATION + '/create', asesor);
  }

  findById(id: number): Observable<Agent> {
    return this.httpClient.get<Agent>(this.URL_BASE_AGENT + '/findById?id=' + id);
  }

}

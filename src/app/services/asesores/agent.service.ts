import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Agent } from 'src/app/core/models/agent';

@Injectable({
  providedIn: 'root'
})

export class AgentService {

  private URL_BASE_AUTHENTICATION = "http://localhost:8080/v1/app-ticket-trace/authentication";
  private URL_BASE_AGENT = "http://localhost:8080/v1/app-ticket-trace/agents";

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Agent[]> {
    return this.httpClient.get<Agent[]>(this.URL_BASE_AGENT + '/findAll');
  }

  public findActives(): Observable<Agent[]> {
    return this.httpClient.get<Agent[]>(this.URL_BASE_AGENT + '/findActives');
  }

  public save(asesor: Agent) {
    return this.httpClient.post<Agent>(this.URL_BASE_AUTHENTICATION + '/create', asesor);
  }

  public findById(id: number): Observable<Agent> {
    return this.httpClient.get<Agent>(this.URL_BASE_AGENT + '/findById?id=' + id);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Agent } from 'src/app/core/models/agent';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AgentService {

  URL_BASE_AUTHENTICATION = "/authentication";
  URL_BASE_AGENT = "/agents";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Agent[]> {
    return this.httpClient.get<Agent[]>(environment.urlBase + this.URL_BASE_AGENT + '/findAll');
  }

  findActives(): Observable<Agent[]> {
    return this.httpClient.get<Agent[]>(environment.urlBase + this.URL_BASE_AGENT + '/findActives');
  }

  save(asesor: Agent) {
    return this.httpClient.post<Agent>(environment.urlBase + this.URL_BASE_AUTHENTICATION + '/create', asesor);
  }

  findById(id: number): Observable<Agent> {
    return this.httpClient.get<Agent>(environment.urlBase + this.URL_BASE_AGENT + '/findById?id=' + id);
  }

  uploadUSerPhoto(formData: FormData, id: number): Observable<any> {
    return this.httpClient.post(environment.urlBase + this.URL_BASE_AGENT + '/upload', formData, {
      params: {
        agentId: id
      }
    });
  }

}

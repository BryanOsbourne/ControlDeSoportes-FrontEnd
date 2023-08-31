import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Agent } from 'src/app/core/models/agent';
import { API_SERVICE } from 'src/app/core/constants/serverConstans';

@Injectable({
  providedIn: 'root'
})

export class AgentService {

  URL_BASE_AUTHENTICATION = API_SERVICE + "/authentication";
  URL_BASE_AGENT = API_SERVICE + "/agents";

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

  uploadUSerPhoto(formData: FormData, id: number): Observable<any> {
    return this.httpClient.post(this.URL_BASE_AGENT + '/upload', formData, {
      params: {
        agentId: id
      }
    });
  }

}

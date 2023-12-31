import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from 'src/app/core/models/agent';
import jwt_decode from 'jwt-decode';
import { AuthenticationResponse } from 'src/app/core/models/AuthenticationResponse';
import { AuthenticationRequest } from 'src/app/core/models/AuthenticationRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  URL_BASE_AUTHENTICATION = "/authentication";

  constructor(private httpClient: HttpClient) { }

  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.httpClient.post<AuthenticationResponse>(environment.urlBase + this.URL_BASE_AUTHENTICATION + '/authenticate', authenticationRequest);
  }

  updateProfile(asesor: Agent): Observable<Agent> {
    return this.httpClient.post<Agent>(environment.urlBase + this.URL_BASE_AUTHENTICATION + '/update', asesor);
  }

  recoverByUsername(username: string): Observable<any> {
    return this.httpClient.post<any>(environment.urlBase + this.URL_BASE_AUTHENTICATION + '/recover', username);
  }

  setToken(authenticationResponse: AuthenticationResponse) {
    localStorage.setItem('token', authenticationResponse.token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserToken() {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.asesor;
    }
  }

  logout() {
    localStorage.removeItem('token');
    return true;
  }

}

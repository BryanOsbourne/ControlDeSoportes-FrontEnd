import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BASE } from 'src/app/config/appconfig';
import { AuthenticationRequest } from 'src/app/models/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/models/AuthenticationResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private RESOURCES = "authentication/";

  constructor(private httpClient: HttpClient) { }

  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.httpClient.post<AuthenticationResponse>(URL_BASE + this.RESOURCES +'authenticate', authenticationRequest);
  }

  setToken(authenticationResponse: AuthenticationResponse) {
    localStorage.setItem('token', authenticationResponse.token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    return true;
  }

}

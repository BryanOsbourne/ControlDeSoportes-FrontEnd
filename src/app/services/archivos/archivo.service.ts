import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  URL_BASE = "http://localhost:8080/v1/app-ticket-trace/files";

  constructor(private httpClient: HttpClient) { }

  uploadUSerPhoto(formData: FormData): Observable<any> {
    return this.httpClient.post(this.URL_BASE + '/upload', formData);
  }

}

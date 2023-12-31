import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  URL_BASE = "/reports";

  constructor(private httpClient: HttpClient) { }

  getReport(parametros: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.get(
      environment.urlBase + this.URL_BASE + '/export-supports',
      {
        headers,
        responseType: 'blob' as 'json',
        params: parametros
      });
  }

  manageExcelFile(response: any, fileName: string) {
    debugger;
    const dataType = response.type;
    const binaryData = []
    binaryData.push(response)

    const filtePath = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
    const downloadLink = document.createElement('a');
    downloadLink.href = filtePath;
    downloadLink.setAttribute('download', fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }
}

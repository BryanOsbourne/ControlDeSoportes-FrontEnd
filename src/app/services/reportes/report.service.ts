import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private URL_BASE = "http://localhost:8080/v1/app-ticket-trace/reports";

  constructor(private httpClient: HttpClient) { }

  public getReport(parametros: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.get(
      this.URL_BASE + '/export-supports',
      {
        headers,
        responseType: 'blob' as 'json',
        params: parametros
      });
  }

  public manageExcelFile(response: any, fileName: string) {
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

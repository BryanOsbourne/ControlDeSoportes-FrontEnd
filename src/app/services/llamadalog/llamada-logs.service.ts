import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LlamadaLogs } from '../../models/llamadaLogs';
import { URL_BASE } from 'src/app/config/appconfig';

@Injectable({
  providedIn: 'root'
})

export class LlamadaLogsService {

  private RESOURCES = "llamadaLogs/";

  constructor(private httpClient: HttpClient) { }
  

  buscarLogById(id: number): Observable<LlamadaLogs> {
    return this.httpClient.get<LlamadaLogs>(URL_BASE + this.RESOURCES + 'buscarPor?id=' + id);
  }

  buscarLogPorConsecutivoDeLlamada(id: number): Observable<LlamadaLogs[]> {
    return this.httpClient.get<LlamadaLogs[]>(URL_BASE + this.RESOURCES + 'listarPor?consecutivoLlamada=' + id);
  }

  buscarLlamadaSegunCriterios(criterios: any): Observable<LlamadaLogs[]> {
    const criteriosDeConsulta = {
      params: {
        codAsesor: criterios.codigoAsesor,
        consecutivo : criterios.idLlamadaLog,
        fechaDesde: criterios.fechaDesde,
        fechaHasta: criterios.fechaHasta
      }
    };
    return this.httpClient.get<LlamadaLogs[]>(URL_BASE + this.RESOURCES + 'listarSegunCriterios', criteriosDeConsulta);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Llamada } from '../../models/llamada';
import { URL_BASE } from 'src/app/config/appconfig';

@Injectable({
  providedIn: 'root'
})

export class LlamadasService {

  private RESOURCES = "llamadas/";

  constructor(private httpClient: HttpClient) { }

  listarLlamadas(): Observable<Llamada[]> {
    return this.httpClient.get<Llamada[]>(URL_BASE + this.RESOURCES + 'listarTodas');
  }

  registrarLlamada(llamada: Llamada) {
    return this.httpClient.post(URL_BASE + this.RESOURCES + 'guardar', llamada);
  }

  buscarLlamadaPorId(id: number): Observable<Llamada> {
    return this.httpClient.get<Llamada>(URL_BASE + this.RESOURCES + 'buscarPor?id=' + id);
  }

  buscarLlamadaPorCliente(idCliente: number): Observable<Llamada[]> {
    return this.httpClient.get<Llamada[]>(URL_BASE + this.RESOURCES + 'buscarPor?idCliente=' + idCliente);
  }

  eliminarLlamada(id: number) {
    this.httpClient.post(URL_BASE + this.RESOURCES + 'delete?id=', id);
  }

  buscarLlamadaSegunCriterios(criterios: any): Observable<Llamada[]> {
    const criteriosDeConsulta = {
      params: {
        codAsesor: criterios.codigoAsesor,
        codcliente: criterios.codigoCliente,
        estado: criterios.estado,
        tipo: criterios.tipo,
        fechaDesde: criterios.fechaDesde,
        fechaHasta: criterios.fechaHasta,
      }
    };
    return this.httpClient.get<Llamada[]>(URL_BASE + this.RESOURCES + 'listarSegunCriterios', criteriosDeConsulta);
  }

}



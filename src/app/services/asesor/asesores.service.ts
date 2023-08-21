import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Asesor } from '../../models/asesor';
import { URL_BASE } from 'src/app/config/appconfig';


@Injectable({
  providedIn: 'root'
})

export class AsesoresService {

  private RESOURCES = "asesores/";
  private autho = "authentication/";

  constructor(private httpClient: HttpClient) { }

  listarAsesores(): Observable<Asesor[]> {
    return this.httpClient.get<Asesor[]>(URL_BASE + this.RESOURCES + 'listarTodos');
  }

  listarActivos(): Observable<Asesor[]> {
    return this.httpClient.get<Asesor[]>(URL_BASE + this.RESOURCES + 'listarActivos');
  }

  registrarAsesor(asesor: Asesor) {
    return this.httpClient.post(URL_BASE + this.autho + 'registrar', asesor);
  }

  buscarPorCodigo(id: number): Observable<Asesor> {
    return this.httpClient.get<Asesor>(URL_BASE + this.RESOURCES + 'buscarPor?id=' + id);
  }

}

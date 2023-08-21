import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/cliente';
import { URL_BASE } from 'src/app/config/appconfig';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private RESOURCES = "clientes/";

  constructor(private httpClient: HttpClient) { }

  listarClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(URL_BASE + this.RESOURCES + 'listarTodos');
  }

  buscarPorCodigo(codigo: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(URL_BASE + this.RESOURCES + 'buscarPor?codigo=' + codigo);
  }

  registrarCliente(cliente: Cliente) {
    return this.httpClient.post(URL_BASE + this.RESOURCES + 'guardar', cliente);
  }

  listarClientesActivos(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(URL_BASE + this.RESOURCES + 'listarActivos');
  }

}

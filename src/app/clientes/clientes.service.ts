import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'
import { Cliente } from '../interfaces/cliente';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url: string = environment.url;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${ this.url }/clientes`);
  }

  create(cliente: Cliente){
    return this.http.post<Cliente>(`${this.url }/clientes`, cliente);
  }

  getCliente(id : any): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/clientes/${id}`);
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.url}/clientes/${cliente.id}`, cliente, ({headers: this.httpHeaders}));
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.url}/clientes/${id}`, {headers: this.httpHeaders});
  }

}

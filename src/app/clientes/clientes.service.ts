import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'
import { Cliente } from '../interfaces/cliente';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url: string = environment.url;

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${ this.url }/clientes`);
  }

  create(cliente: Cliente){
    return this.http.post<Cliente>(`${this.url }/clientes`, cliente);
  }

}

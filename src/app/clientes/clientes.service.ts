import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { environment } from '../../environments/environment'
import { Cliente } from '../interfaces/cliente';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url: string = environment.url;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private messageService : MessageService,
              private router         : Router) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${ this.url }/clientes`)
    .pipe(
      catchError( e =>{

        console.error(e.error.mensaje);
        this.messageService.add({sticky:true, severity:'error', summary: 'Error al obtener los clientes', detail: e.error.mensaje});
        setTimeout(() => {this.router.navigate(['/clientes'])} , 2500);
        return throwError(e);

      })
    )
  }

  create(cliente: Cliente){
    return this.http.post<Cliente>(`${this.url }/clientes`, cliente).pipe(
      catchError( e =>{

        console.error(e.error.mensaje);
        this.messageService.add({sticky:true, severity:'error', summary: 'Error al crear', detail: e.error.mensaje});
        setTimeout(() => {this.router.navigate(['/clientes'])} , 2500);
        return throwError(e);

      })
    )
  }

  getCliente(id : any): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/clientes/${id}`).pipe(
      catchError( e => {

        console.error(e.error.mensaje);
        this.messageService.add({sticky:true, severity:'error', summary: 'Error al editar el cliente', detail: e.error.mensaje});
        setTimeout(() => {this.router.navigate(['/clientes'])} , 2500);
        return throwError(e);


      })
    )
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.url}/clientes/${cliente.id}`, cliente, ({headers: this.httpHeaders}))
    .pipe( 
      catchError( e => {

        console.error(e.error.mensaje);
        this.messageService.add({sticky:true, severity:'error', summary: 'Error al editar el cliente', detail: e.error.mensaje});
        setTimeout(() => {this.router.navigate(['/clientes'])} , 2500);
        return throwError(e);


      })
    )
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.url}/clientes/${id}`, {headers: this.httpHeaders})
    .pipe( 
      catchError( e => {

        console.error(e.error.mensaje);
        this.messageService.add({sticky:true, severity:'error', summary: 'Error al eliminar el cliente', detail: e.error.mensaje});
        setTimeout(() => {this.router.navigate(['/clientes'])} , 2500);
        return throwError(e);


      }));
  }

}

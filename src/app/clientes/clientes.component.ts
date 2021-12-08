import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { ClientesService } from './clientes.service';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes !: Cliente[];

  clientDelete !: Cliente;

  constructor( private clientesService: ClientesService,
               private messageService : MessageService) { }

  ngOnInit(): void {
    this.clientesService.getClientes()
    .subscribe( clientes =>{
      this.clientes = clientes;
    })
  }

  delete(cliente: Cliente){
    this.clientesService.delete(this.clientDelete.id || 0)
    .subscribe( response =>{
      this.clientes = this.clientes.filter( cli => cli !== this.clientDelete);
    })
    this.messageService.clear('c');
    
    this.messageService.add({sticky:true, severity:'success', summary: 'Eliminado', detail: 'El cliente se ha eliminado con éxito'});
  }

  onConfirm(cliente : Cliente) {
    this.clientesService.delete(cliente.id || 0)
    .subscribe( response =>{
      this.clientes = this.clientes.filter( cli => cli !== cliente);
    })
}

onReject() {
    this.messageService.clear('c');
}

clear() {
    this.messageService.clear();
}

  showConfirm(cliente: Cliente) {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:`¿Está seguro de eliminar al cliente ${cliente.nombre}?`, detail:'Confirma para poder continuar'});
    this.clientDelete = cliente;
}


}

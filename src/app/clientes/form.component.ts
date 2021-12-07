import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Cliente } from '../interfaces/cliente';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private cliente!: Cliente;

   title  : string = 'Crear cliente';

   form : FormGroup = this.fb.group({
     name    : ['', [Validators.required, Validators.minLength(2) ]],
     lastName: ['', [Validators.required, Validators.minLength(2)]],
     email   : ['', [Validators.required, Validators.email]]
   });

  constructor(private fb            : FormBuilder,
              private clienteService: ClientesService,
              private router        : Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
    
  }

  sendData(){

    
    this.cliente = {
      nombre: this.form.controls['name'].value,
      apellido: this.form.controls['lastName'].value,
      email: this.form.controls['email'].value
    }

    console.log(this.form);
    this.clienteService.create( this.cliente )
    .subscribe( response =>{
    
      this.showSuccess()
      this.router.navigate(['clientes']);

    })
  }

  showSuccess() {
    this.messageService.add({severity:'Cliente creado', summary: 'Confirm', detail: 'El cliente ha sido creado con éxito!'});
}

}

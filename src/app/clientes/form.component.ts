import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Cliente } from '../interfaces/cliente';
import { ClientesService } from './clientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente !: Cliente;

   title  : string = 'Crear cliente';

   form : FormGroup = this.fb.group({
     name    : ['', [Validators.required, Validators.minLength(2) ]],
     lastName: ['', [Validators.required, Validators.minLength(2)]],
     email   : ['', [Validators.required, Validators.email]]
   });

  constructor(private fb            : FormBuilder,
              private clienteService: ClientesService,
              private router        : Router,
              private messageService: MessageService,
              private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(): void{
    this.activateRoute.params.subscribe( params =>{
      let id = params['id'];

      if(id){
        this.clienteService.getCliente(id)
        .subscribe( (cliente) => {

          this.cliente = cliente;
          this.form.controls['name'].setValue( cliente.nombre );
          this.form.controls['lastName'].setValue( cliente.apellido );
          this.form.controls['email'].setValue( cliente.email );
        });

      }

    });
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
    
      this.messageService.add({sticky:true, severity:'success', summary: 'Registrado', detail: 'El cliente se ha creado con éxito'});

      // Add delay in route
      setTimeout(() => {this.router.navigate(['/clientes'])} , 1500);

    })
  }


  update(): void {

    this.cliente = {
      id: this.cliente.id,
      nombre: this.form.controls['name'].value,
      apellido: this.form.controls['lastName'].value,
      email: this.form.controls['email'].value
    }
    
    this.clienteService.update(this.cliente)
    .subscribe( cliente => {
      
      this.messageService.add({sticky:true, severity:'success', summary: 'Actualizado', detail: 'El cliente se ha actualizado con éxito'});

      // Add delay in route
      setTimeout(() => {this.router.navigate(['/clientes'])} , 1500);
    })
  }

 //
 showSuccess(){
  
}

}

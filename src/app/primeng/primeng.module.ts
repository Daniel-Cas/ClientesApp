import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import { MenubarModule} from 'primeng/menubar'
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    ButtonModule,
    TabMenuModule,
    MenubarModule,
    InputTextModule
  ]
})
export class PrimengModule { }

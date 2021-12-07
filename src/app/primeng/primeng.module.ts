import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import { MenubarModule} from 'primeng/menubar'
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    ButtonModule,
    TabMenuModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    ToastModule
    
  ]
})
export class PrimengModule { }

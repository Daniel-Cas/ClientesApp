import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {

    this.items = [
    {label: 'Angular App', icon: 'pi pi-prime', separator: true, disabled: true},
    {label: 'Inicio', icon: 'pi pi-fw pi-inbox'},
    {label: 'Clientes', icon: 'pi pi-fw pi-id-card'}
    ];
  }

}

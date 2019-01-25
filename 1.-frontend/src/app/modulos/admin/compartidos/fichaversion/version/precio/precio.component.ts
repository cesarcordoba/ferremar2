
import { Component, OnInit, Input } from '@angular/core';

import {MatChipInputEvent} from '@angular/material';
//    4
import { PrecioService, InventarioService } from '../../../../../../servicios';
@Component({
  selector: 'precio',
  templateUrl: './precio.component.pug',
  styleUrls: ['./precio.component.styl']
})
export class PrecioComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    @Input() sucursal


    precios: any 

    constructor() {


    //
    // PrecioService.obtener()
    // .then(response => this.precios = response)
    // .then(response => console.log(response))

  }

  ngOnInit() {
      InventarioService.precios(this.sucursal.Inventario.id)
      .then(response => this.precios = response)

  }

  add(event: MatChipInputEvent){

    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
        PrecioService.crear({cantidad :  value.trim() })
        .then(precio => InventarioService.ligarprecio(this.sucursal.Inventario.id, precio.id))
        .then(response => console.log(response))
      this.precios.push({cantidad: value.trim()});
    }

    if (input) {
      input.value = '';
    }

  }
}


import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Input } from '@angular/core';

import { VersionService, MarcaService, ProductoService } from '../../../../../servicios';
import { Precio } from '../../../../../modelos';

import {Sort} from '@angular/material';

import { DetalleversionComponent } from  './detalleversion/detalleversion.component'

import * as _ from 'lodash'
declare var $: any;
export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'versiones',
  templateUrl: './versiones.component.pug',
  styleUrls: ['./versiones.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class VersionesComponent implements OnInit {

  //   borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
  /**  */

    @Input() producto

    versiones : any = []
    margenes : any = []

    procesando = false

    constructor( private dialog: MatDialog) {}

    ngOnInit() {

        this.procesando = true

        VersionService.xProducto(this.producto.id)
        .then(versiones => Promise.all(
            versiones.map(async (version) => {
                 return Object.assign(version, { precios : await VersionService.precios(version.id)
                })
            }
        )))
        .then(response => this.versiones = response)
        .then(() => this.procesando = false)

        ProductoService.margenes(this.producto.id)
        .then(margenes => this.margenes = margenes)

    }

    calcular(precios : any[] ){
        let array = precios.sort((a, b) => (new Date(b.createdAt).getTime()) + ( new Date(a.createdAt).getTime()))
        return array.length > 0 ? this.margenes.reduce((ac, v) => ac * (1 + (v.cantidad / 100)), _.last(array).cantidad) : null
    }

    abrir(x){

      this.dialog.open(DetalleversionComponent, {
          position : {
              top : '25px'
          },
          width :  $(window).width() + 'px',
          height :  $(window).height() - 50 + 'px',
          maxWidth : $(window).width() - 50 + 'px',
          data :  x
      }).afterClosed().subscribe(response => {

      });

  }


}

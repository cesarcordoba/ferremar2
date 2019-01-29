
import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../../../../../servicios';
@Component({
  selector: 'gridproductos',
  templateUrl: './gridproductos.component.pug',
  styleUrls: ['./gridproductos.component.styl']
})
export class GridproductosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    productos = {
        items : []
    }
    filtro : any;
    columnas = 4
    height = '200px'
    colspan = 1
    rowspan = 1

    constructor() {
        this.filtro = {
                pagina : 1,
                limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  5 :  3,
                order : ['id'],
                where : {},
                include : []
            }

    ProductoService.paginacion(this.filtro)
    .then(response => this.productos = response)

  }

  ngOnInit() {



  }
}
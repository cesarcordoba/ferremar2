
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProductoService } from '../../../../servicios';
import { Router } from '@angular/router';
import * as _ from 'lodash'
import { DetalleproductoComponent } from  './detalleproducto/detalleproducto.component'

declare var $: any;
@Component({
  selector: 'listaproductos',
  templateUrl: './listaproductos.component.pug',
  styleUrls: ['./listaproductos.component.styl']
})
export class ListaproductosComponent implements OnInit, AfterViewInit {


    @Input() nuevaPeticion

    productos = {
        items : [],
        paginas : 0
    }

    procesando = false

    peticion : any

    constructor( private dialog: MatDialog, public route : Router) {


        // ProductoService.paginacion(this.filtro)
        // .then(response => this.productos = response)

    }

    cambioPagina(ev){
        this.peticion.pagina = ev.pageIndex++
        this.obtener()
    }

    ngOnInit() {

    }

    ir(producto){

        console.log(producto)

        this.route.navigate(['admin/producto/' + producto.id ],)
        // { queryParams: { nombre: _.snakeCase(producto.nombre) } } )
    }

    imprimir(){

        console.log(this)

    }


    ngAfterViewInit(){
        this.nuevaPeticion.subscribe((value) => {
            this.peticion = value
            this.obtener()

        })
    }

    obtener(){

        this.procesando = true

        ProductoService.filtro(this.peticion)
        .then(response => this.productos = response)
        .then(productos => this.productos.items.forEach(n => {}))
        .then(() => this.procesando = false)

    }

    abrir(x){

        this.dialog.open(DetalleproductoComponent, {
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

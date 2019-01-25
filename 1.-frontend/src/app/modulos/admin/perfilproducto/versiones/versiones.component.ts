import { Component, OnInit, Input } from '@angular/core';
import {  BehaviorSubject, Observable  } from 'rxjs'

//    2
import { VersionService, ProductoService } from '../../../../servicios';
@Component({
  selector: 'versiones',
  templateUrl: './versiones.component.pug',
  styleUrls: ['./versiones.component.styl']
})
export class VersionesComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() nuevoProducto


    versiones: any = []
    producto : any

    constructor() {

        // this.pasarProducto = new BehaviorSubject({});



  }

  ngOnInit() {}

  ngAfterViewInit(){
      this.nuevoProducto.subscribe((value) => {
          if(value.id){

                ProductoService.versiones(value.id)
                .then(response => this.versiones = response)

        }
      })
  }


}

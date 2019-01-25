


import { InventarioService } from '../servicios/Inventario.service'
import * as _ from 'lodash'

export class Inventario {
    id: number;

//5
    precios : any;//5
    existencias : any;
    clave : string;

    constructor(arg) {
        if(_.isObject(arg))
            Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }

         //5
    // precio
    obtenerPrecios(){
        return new Promise(resolve => {
            InventarioService.precios(this.id)
            .then(response => this.precios = response)
            .then(response => resolve(response))
        })
    }//5
    // existencia
    obtenerExistencias(){
        return new Promise(resolve => {
            InventarioService.existencias(this.id)
            .then(response => this.existencias = response)
            .then(response => resolve(response))
        })
    }
    //- Finalizo
}
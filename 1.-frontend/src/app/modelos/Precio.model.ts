


import { PrecioService } from '../servicios/Precio.service'
import * as _ from 'lodash'

export class Precio {
    id: number;


    inventarios : any;
    transacciones : any;
    cantidad : number;
    status : number;

    constructor(arg) {
        if(_.isObject(arg))
            Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }

         
    // inventario
    obtenerInventarios(){
        return new Promise(resolve => {
            PrecioService.inventarios(this.id)
            .then(response => this.inventarios = response)
            .then(response => resolve(response))
        })
    }
    // transaccion
    obtenerTransacciones(){
        return new Promise(resolve => {
            PrecioService.transacciones(this.id)
            .then(response => this.transacciones = response)
            .then(response => resolve(response))
        })
    }
    //- Finalizo
}
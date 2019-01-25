
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Inventario } from '../modelos/Inventario.model'
import * as axios from 'axios'

import { Precio } from '../modelos/Precio.model';
import { Existencia } from '../modelos/Existencia.model';
const url = APILOCAL.url

@Injectable()
export class InventarioService {

    public static crear = (peticion) => axios.default.post( url + '/data/inventario', peticion).then(response =>  new Inventario( response.data ))
    public static obtener = () => axios.default.get( url + '/data/inventario').then(response => response.data.map(n => new Inventario( n )))
    public static one = (id) => axios.default.get( url + '/data/inventario/' + id).then(response =>  new Inventario( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/inventario/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/inventario/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/inventario/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Inventario( n ))}))

    public static precios = id => axios.default.get( url + '/data/inventario/precios/' + id ).then(response => response.data.map(n => new Precio( n )))
    public static ligarprecio = (inventario , precio) => axios.default.put( url + '/data/inventario-precio/' + inventario + '/' + precio )
    public static desligarprecio = (inventario , precio) => axios.default.delete( url + '/data/inventario-precio/' + inventario + '/' + precio )

    public static existencias = id => axios.default.get( url + '/data/inventario/existencias/' + id ).then(response => response.data.map(n => new Existencia( n )))
    public static ligarexistencia = (inventario , existencia) => axios.default.put( url + '/data/inventario-existencia/' + inventario + '/' + existencia )
    public static desligarexistencia = (inventario , existencia) => axios.default.delete( url + '/data/inventario-existencia/' + inventario + '/' + existencia )


    //- Finalizo
}

import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Precio } from '../modelos/Precio.model'
import * as axios from 'axios'

import { Inventario } from '../modelos/Inventario.model';
import { Transaccion } from '../modelos/Transaccion.model';
const url = APILOCAL.url

@Injectable()
export class PrecioService {

    public static crear = (peticion) => axios.default.post( url + '/data/precio', peticion).then(response =>  new Precio( response.data ))
    public static obtener = () => axios.default.get( url + '/data/precio').then(response => response.data.map(n => new Precio( n )))
    public static one = (id) => axios.default.get( url + '/data/precio/' + id).then(response =>  new Precio( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/precio/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/precio/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/precio/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Precio( n ))}))

    public static inventarios = id => axios.default.get( url + '/data/precio/inventarios/' + id ).then(response => response.data.map(n => new Inventario( n )))
    public static ligarinventario = (precio , inventario) => axios.default.put( url + '/data/precio-inventario/' + precio + '/' + inventario )
    public static desligarinventario = (precio , inventario) => axios.default.delete( url + '/data/precio-inventario/' + precio + '/' + inventario )

    public static transacciones = id => axios.default.get( url + '/data/precio/transacciones/' + id ).then(response => response.data.map(n => new Transaccion( n )))
    public static ligartransaccion = (precio , transaccion) => axios.default.put( url + '/data/precio-transaccion/' + precio + '/' + transaccion )
    public static desligartransaccion = (precio , transaccion) => axios.default.delete( url + '/data/precio-transaccion/' + precio + '/' + transaccion )


    //- Finalizo
}
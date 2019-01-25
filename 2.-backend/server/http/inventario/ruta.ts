
import { Router } from "express";
import { InventarioController } from "./controlador";

export class InventarioRouter {
    private _rutas = Router();
    private controlador: InventarioController;

    constructor() {
        this.controlador = new InventarioController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/inventario')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/inventario/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/inventario/paginacion')
            .post(this.controlador.paginacion);



        //*
        this._rutas.route('/data/inventario/precios/:id')
            .get(this.controlador.precios)

        //*
        this._rutas.route('/data/inventario-precio/:inventario/:precio')
            .put(this.controlador.ligarprecios)
            .delete(this.controlador.desligarprecios)

        

        //*
        this._rutas.route('/data/inventario/existencias/:id')
            .get(this.controlador.existencias)

        //*
        this._rutas.route('/data/inventario-existencia/:inventario/:existencia')
            .put(this.controlador.ligarexistencias)
            .delete(this.controlador.desligarexistencias)

        
        }

    rutas() {
        return this._rutas;
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
class OfertaRouter {
    constructor() {
        this._rutas = express_1.Router();
        this.controlador = new controlador_1.OfertaController();
        this.init();
    }
    init() {
        //*
        this._rutas.route('/data/oferta')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);
        //*
        this._rutas.route('/data/oferta/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);
        //*
        this._rutas.route('/data/oferta/paginacion')
            .post(this.controlador.paginacion);
        this._rutas.route('/data/oferta/xPromo/:id')
            .get(this.controlador.xpromo);
        this._rutas.route('/data/oferta/Promo/:id')
            .get(this.controlador.promo);
        //*
        this._rutas.route('/data/oferta-promo/:oferta/:promo')
            .put(this.controlador.ligarpromos)
            .delete(this.controlador.desligarpromos);
        //*
        this._rutas.route('/data/oferta/Entrantes/:id')
            .get(this.controlador.entrantes);
        //*
        this._rutas.route('/data/oferta-version-entrantes/:oferta/:version')
            .put(this.controlador.ligarentrantes)
            .delete(this.controlador.desligarentrantes);
        //*
        this._rutas.route('/data/oferta/Salientes/:id')
            .get(this.controlador.salientes);
        //*
        this._rutas.route('/data/oferta-version-salientes/:oferta/:version')
            .put(this.controlador.ligarsalientes)
            .delete(this.controlador.desligarsalientes);
    }
    rutas() {
        return this._rutas;
    }
}
exports.OfertaRouter = OfertaRouter;

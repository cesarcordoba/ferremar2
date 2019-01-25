"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class EntregaController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Entrega.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearEntrega'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Entrega.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarEntrega'))
            :
                modelo_1.Entrega.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarEntrega'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Entrega.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarEntrega'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Entrega.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarEntrega'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Entrega.findAndCountAll({
            order: req.body.order,
            where: req.body.where
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionEntrega'));
        //* 32
        this.transacciones = (req, res, next) => modelo_1.Entrega.findById(req.params.id)
            .then(item => item.$get('Transacciones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Entregatransacciones'));
        //* 32
        this.ligartransacciones = (req, res, next) => modelo_1.Entrega.findById(req.params.entrega)
            .then(item => item.$add('Transacciones', req.params.transaccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarEntregatransacciones'));
        //* 32
        this.desligartransacciones = (req, res, next) => modelo_1.Entrega.findById(req.params.entrega)
            .then(item => item.$remove('Transacciones', req.params.transaccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarEntregatransacciones'));
        //* 33
        this.xorden = (req, res, next) => modelo_1.Entrega.findAll({ where: { 'IdOrden': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xEntregaordenes'));
        //* 33
        this.orden = (req, res, next) => modelo_1.Entrega.findById(req.params.id)
            .then(item => item.$get('Orden'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Entregaordenes'));
        //* 33
        this.ligarordenes = (req, res, next) => modelo_1.Entrega.findById(req.params.entrega)
            .then(item => item.$set('Orden', req.params.orden))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarEntregaordenes'));
        //* 33
        this.desligarordenes = (req, res, next) => modelo_1.Entrega.findById(req.params.entrega)
            .then(item => item.$remove('Orden', req.params.orden))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarEntregaordenes'));
    }
}
exports.EntregaController = EntregaController;

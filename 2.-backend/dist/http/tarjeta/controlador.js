"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asignarPrincipal = require('./asignarPrincipal/asignarPrincipal');
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class TarjetaController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Tarjeta.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearTarjeta'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Tarjeta.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarTarjeta'))
            :
                modelo_1.Tarjeta.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarTarjeta'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Tarjeta.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarTarjeta'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Tarjeta.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarTarjeta'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Tarjeta.findAndCountAll({
            order: req.body.order,
            where: req.body.where
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionTarjeta'));
        //* 31
        this.xusuario = (req, res, next) => modelo_1.Tarjeta.findAll({ where: { 'IdUsuario': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xTarjetausuarios'));
        //* 31
        this.usuario = (req, res, next) => modelo_1.Tarjeta.findById(req.params.id)
            .then(item => item.$get('Usuario'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Tarjetausuarios'));
        //* 31
        this.ligarusuarios = (req, res, next) => modelo_1.Tarjeta.findById(req.params.tarjeta)
            .then(item => item.$set('Usuario', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarTarjetausuarios'));
        //* 31
        this.desligarusuarios = (req, res, next) => modelo_1.Tarjeta.findById(req.params.tarjeta)
            .then(item => item.$remove('Usuario', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarTarjetausuarios'));
        //* 33
        this.ordenes = (req, res, next) => modelo_1.Tarjeta.findById(req.params.id)
            .then(item => item.$get('Ordenes'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Tarjetaordenes'));
        //* 33
        this.ligarordenes = (req, res, next) => modelo_1.Tarjeta.findById(req.params.tarjeta)
            .then(item => item.$add('Ordenes', req.params.orden))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarTarjetaordenes'));
        //* 33
        this.desligarordenes = (req, res, next) => modelo_1.Tarjeta.findById(req.params.tarjeta)
            .then(item => item.$remove('Ordenes', req.params.orden))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarTarjetaordenes'));
        this.asignarPrincipal = (req, res, next) => asignarPrincipal(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Tarjeta_asignarPrincipal'));
    }
}
exports.TarjetaController = TarjetaController;

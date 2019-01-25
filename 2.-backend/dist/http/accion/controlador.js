"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class AccionController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Accion.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearAccion'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Accion.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarAccion'))
            :
                modelo_1.Accion.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarAccion'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Accion.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarAccion'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Accion.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarAccion'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Accion.findAndCountAll({
            order: req.body.order,
            where: req.body.where
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionAccion'));
        //* 31
        this.xusuario = (req, res, next) => modelo_1.Accion.findAll({ where: { 'IdUsuario': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xAccionusuarios'));
        //* 31
        this.usuario = (req, res, next) => modelo_1.Accion.findById(req.params.id)
            .then(item => item.$get('Usuario'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Accionusuarios'));
        //* 31
        this.ligarusuarios = (req, res, next) => modelo_1.Accion.findById(req.params.accion)
            .then(item => item.$set('Usuario', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarAccionusuarios'));
        //* 31
        this.desligarusuarios = (req, res, next) => modelo_1.Accion.findById(req.params.accion)
            .then(item => item.$remove('Usuario', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarAccionusuarios'));
    }
}
exports.AccionController = AccionController;

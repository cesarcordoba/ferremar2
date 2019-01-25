"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asignarPrincipal = require('./asignarPrincipal/asignarPrincipal');
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class DireccionController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Direccion.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearDireccion'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Direccion.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarDireccion'))
            :
                modelo_1.Direccion.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarDireccion'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Direccion.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarDireccion'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Direccion.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarDireccion'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Direccion.findAndCountAll({
            order: req.body.order,
            where: req.body.where
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionDireccion'));
        //* 31
        this.xusuario = (req, res, next) => modelo_1.Direccion.findAll({ where: { 'IdUsuario': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xDireccionusuarios'));
        //* 31
        this.usuario = (req, res, next) => modelo_1.Direccion.findById(req.params.id)
            .then(item => item.$get('Usuario'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Direccionusuarios'));
        //* 31
        this.ligarusuarios = (req, res, next) => modelo_1.Direccion.findById(req.params.direccion)
            .then(item => item.$set('Usuario', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarDireccionusuarios'));
        //* 31
        this.desligarusuarios = (req, res, next) => modelo_1.Direccion.findById(req.params.direccion)
            .then(item => item.$remove('Usuario', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarDireccionusuarios'));
        //* 33
        this.ordenes = (req, res, next) => modelo_1.Direccion.findById(req.params.id)
            .then(item => item.$get('Ordenes'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Direccionordenes'));
        //* 33
        this.ligarordenes = (req, res, next) => modelo_1.Direccion.findById(req.params.direccion)
            .then(item => item.$add('Ordenes', req.params.orden))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarDireccionordenes'));
        //* 33
        this.desligarordenes = (req, res, next) => modelo_1.Direccion.findById(req.params.direccion)
            .then(item => item.$remove('Ordenes', req.params.orden))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarDireccionordenes'));
        this.asignarPrincipal = (req, res, next) => asignarPrincipal(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Direccion_asignarPrincipal'));
    }
}
exports.DireccionController = DireccionController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class SucursalController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Sucursal.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearSucursal'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Sucursal.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarSucursal'))
            :
                modelo_1.Sucursal.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarSucursal'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Sucursal.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarSucursal'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Sucursal.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarSucursal'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Sucursal.findAndCountAll({
            order: req.body.order,
            where: req.body.where
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionSucursal'));
        //* 31
        this.usuarios = (req, res, next) => modelo_1.Sucursal.findById(req.params.id)
            .then(item => item.$get('Usuario'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Sucursalusuarios'));
        //* 31
        this.ligarusuarios = (req, res, next) => modelo_1.Sucursal.findById(req.params.sucursal)
            .then(item => item.$add('Usuario', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarSucursalusuarios'));
        //* 31
        this.desligarusuarios = (req, res, next) => modelo_1.Sucursal.findById(req.params.sucursal)
            .then(item => item.$remove('Usuario', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarSucursalusuarios'));
        //* 33
        this.ordenes = (req, res, next) => modelo_1.Sucursal.findById(req.params.id)
            .then(item => item.$get('Ordenes'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Sucursalordenes'));
        //* 33
        this.ligarordenes = (req, res, next) => modelo_1.Sucursal.findById(req.params.sucursal)
            .then(item => item.$add('Ordenes', req.params.orden))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarSucursalordenes'));
        //* 33
        this.desligarordenes = (req, res, next) => modelo_1.Sucursal.findById(req.params.sucursal)
            .then(item => item.$remove('Ordenes', req.params.orden))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarSucursalordenes'));
        //* 23
        this.versiones = (req, res, next) => modelo_1.Sucursal.findById(req.params.id)
            .then(item => item.$get('Versiones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'SucursalVersiones'));
        //* 23
        this.ligarversiones = (req, res, next) => modelo_1.Sucursal.findById(req.params.sucursal)
            .then(item => item.$add('Versiones', req.params.version, { through: req.body ? req.body : null }))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarSucursalVersiones'));
        //* 23
        this.desligarversiones = (req, res, next) => modelo_1.Sucursal.findById(req.params.sucursal)
            .then(item => item.$remove('Versiones', req.params.version))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarSucursalVersiones'));
    }
}
exports.SucursalController = SucursalController;

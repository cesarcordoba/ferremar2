"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const opcionesdisponibles = require('./opcionesdisponibles/opcionesdisponibles');
const precios = require('./precios/precios');
const xNombre = require('./xNombre/xNombre');
const precioactual = require('./precioactual/precioactual');
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class VersionController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Version.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearVersion'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Version.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarVersion'))
            :
                modelo_1.Version.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarVersion'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Version.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarVersion'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarVersion'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Version.findAndCountAll({
            order: req.body.order,
            where: req.body.where
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionVersion'));
        //* 1
        this.xproducto = (req, res, next) => modelo_1.Version.findAll({ where: { 'IdProducto': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xVersionproductos'));
        //* 1
        this.producto = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Producto'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Versionproductos'));
        //* 1
        this.ligarproductos = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$set('Producto', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersionproductos'));
        //* 1
        this.desligarproductos = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Producto', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersionproductos'));
        //* 11
        this.opciones = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Opciones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Versionopciones'));
        //* 11
        this.ligaropciones = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$add('Opciones', req.params.opcion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersionopciones'));
        //* 11
        this.desligaropciones = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Opciones', req.params.opcion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersionopciones'));
        //* 19
        this.descuentos = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Descuentos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Versiondescuentos'));
        //* 19
        this.ligardescuentos = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$add('Descuentos', req.params.descuento))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersiondescuentos'));
        //* 19
        this.desligardescuentos = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Descuentos', req.params.descuento))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersiondescuentos'));
        //* 32
        this.transacciones = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Transacciones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Versiontransacciones'));
        //* 32
        this.ligartransacciones = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$add('Transacciones', req.params.transaccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersiontransacciones'));
        //* 32
        this.desligartransacciones = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Transacciones', req.params.transaccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersiontransacciones'));
        //* 21
        this.salientes = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Salientes'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'VersionSalientes'));
        //* 21
        this.ligarsalientes = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$add('Salientes', req.params.oferta, { through: req.body ? req.body : null }))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersionSalientes'));
        //* 21
        this.desligarsalientes = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Salientes', req.params.oferta))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersionSalientes'));
        //* 22
        this.entrantes = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Entrantes'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'VersionEntrantes'));
        //* 22
        this.ligarentrantes = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$add('Entrantes', req.params.oferta, { through: req.body ? req.body : null }))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersionEntrantes'));
        //* 22
        this.desligarentrantes = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Entrantes', req.params.oferta))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersionEntrantes'));
        //* 36
        this.usuarios = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Usuarios'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'VersionUsuarios'));
        //* 36
        this.ligarusuarios = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$add('Usuarios', req.params.usuario, { through: req.body ? req.body : null }))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersionUsuarios'));
        //* 36
        this.desligarusuarios = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Usuarios', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersionUsuarios'));
        //* 23
        this.sucursales = (req, res, next) => modelo_1.Version.findById(req.params.id)
            .then(item => item.$get('Sucursales'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'VersionSucursales'));
        //* 23
        this.ligarsucursales = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$add('Sucursales', req.params.sucursal, { through: req.body ? req.body : null }))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarVersionSucursales'));
        //* 23
        this.desligarsucursales = (req, res, next) => modelo_1.Version.findById(req.params.version)
            .then(item => item.$remove('Sucursales', req.params.sucursal))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarVersionSucursales'));
        this.opcionesdisponibles = (req, res, next) => opcionesdisponibles(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Version_opcionesdisponibles'));
        this.precios = (req, res, next) => precios(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Version_precios'));
        this.xNombre = (req, res, next) => xNombre(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Version_xNombre'));
        this.precioactual = (req, res, next) => precioactual(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Version_precioactual'));
    }
}
exports.VersionController = VersionController;

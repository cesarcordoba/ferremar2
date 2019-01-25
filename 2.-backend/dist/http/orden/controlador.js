"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crearOrden = require('./crearOrden/crearOrden');
const crearCargo = require('./crearCargo/crearCargo');
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class OrdenController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Orden.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearOrden'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Orden.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarOrden'))
            :
                modelo_1.Orden.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarOrden'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Orden.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarOrden'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Orden.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarOrden'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Orden.findAndCountAll({
            order: req.body.order,
            where: req.body.where
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionOrden'));
        //* 25
        this.xsucursal = (req, res, next) => modelo_1.Orden.findAll({ where: { 'IdSucursal': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xOrdensucursales'));
        //* 25
        this.sucursal = (req, res, next) => modelo_1.Orden.findById(req.params.id)
            .then(item => item.$get('Sucursal'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Ordensucursales'));
        //* 25
        this.ligarsucursales = (req, res, next) => modelo_1.Orden.findById(req.params.orden)
            .then(item => item.$set('Sucursal', req.params.sucursal))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarOrdensucursales'));
        //* 25
        this.desligarsucursales = (req, res, next) => modelo_1.Orden.findById(req.params.orden)
            .then(item => item.$remove('Sucursal', req.params.sucursal))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarOrdensucursales'));
        //* 31
        this.xusuario = (req, res, next) => modelo_1.Orden.findAll({ where: { 'IdUsuario': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xOrdenusuarios'));
        //* 31
        this.usuario = (req, res, next) => modelo_1.Orden.findById(req.params.id)
            .then(item => item.$get('Usuario'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Ordenusuarios'));
        //* 31
        this.ligarusuarios = (req, res, next) => modelo_1.Orden.findById(req.params.orden)
            .then(item => item.$set('Usuario', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarOrdenusuarios'));
        //* 31
        this.desligarusuarios = (req, res, next) => modelo_1.Orden.findById(req.params.orden)
            .then(item => item.$remove('Usuario', req.params.usuario))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarOrdenusuarios'));
        //* 32
        this.transacciones = (req, res, next) => modelo_1.Orden.findById(req.params.id)
            .then(item => item.$get('Transacciones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Ordentransacciones'));
        //* 32
        this.ligartransacciones = (req, res, next) => modelo_1.Orden.findById(req.params.orden)
            .then(item => item.$add('Transacciones', req.params.transaccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarOrdentransacciones'));
        //* 32
        this.desligartransacciones = (req, res, next) => modelo_1.Orden.findById(req.params.orden)
            .then(item => item.$remove('Transacciones', req.params.transaccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarOrdentransacciones'));
        //* 39
        this.xdireccion = (req, res, next) => modelo_1.Orden.findAll({ where: { 'IdDireccion': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xOrdendirecciones'));
        //* 39
        this.direccion = (req, res, next) => modelo_1.Orden.findById(req.params.id)
            .then(item => item.$get('Direccion'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Ordendirecciones'));
        //* 39
        this.ligardirecciones = (req, res, next) => modelo_1.Orden.findById(req.params.orden)
            .then(item => item.$set('Direccion', req.params.direccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarOrdendirecciones'));
        //* 39
        this.desligardirecciones = (req, res, next) => modelo_1.Orden.findById(req.params.orden)
            .then(item => item.$remove('Direccion', req.params.direccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarOrdendirecciones'));
        //* 40
        this.xtarjeta = (req, res, next) => modelo_1.Orden.findAll({ where: { 'IdTarjeta': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xOrdentarjetas'));
        //* 40
        this.tarjeta = (req, res, next) => modelo_1.Orden.findById(req.params.id)
            .then(item => item.$get('Tarjeta'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Ordentarjetas'));
        //* 40
        this.ligartarjetas = (req, res, next) => modelo_1.Orden.findById(req.params.orden)
            .then(item => item.$set('Tarjeta', req.params.tarjeta))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarOrdentarjetas'));
        //* 40
        this.desligartarjetas = (req, res, next) => modelo_1.Orden.findById(req.params.orden)
            .then(item => item.$remove('Tarjeta', req.params.tarjeta))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarOrdentarjetas'));
        //* 43
        this.entregas = (req, res, next) => modelo_1.Orden.findById(req.params.id)
            .then(item => item.$get('Entregas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Ordenentregas'));
        //* 43
        this.ligarentregas = (req, res, next) => modelo_1.Orden.findById(req.params.orden)
            .then(item => item.$add('Entregas', req.params.entrega))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarOrdenentregas'));
        //* 43
        this.desligarentregas = (req, res, next) => modelo_1.Orden.findById(req.params.orden)
            .then(item => item.$remove('Entregas', req.params.entrega))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarOrdenentregas'));
        this.crearOrden = (req, res, next) => crearOrden(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Orden_crearOrden'));
        this.crearCargo = (req, res, next) => crearCargo(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Orden_crearCargo'));
    }
}
exports.OrdenController = OrdenController;

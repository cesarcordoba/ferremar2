"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verificarProducto = require('./verificarProducto/verificarProducto');
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class PromoController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Promo.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearPromo'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Promo.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarPromo'))
            :
                modelo_1.Promo.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarPromo'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Promo.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarPromo'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Promo.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarPromo'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Promo.findAndCountAll({
            order: req.body.order,
            where: req.body.where
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionPromo'));
        //* 19
        this.descuentos = (req, res, next) => modelo_1.Promo.findById(req.params.id)
            .then(item => item.$get('Descuentos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Promodescuentos'));
        //* 19
        this.ligardescuentos = (req, res, next) => modelo_1.Promo.findById(req.params.promo)
            .then(item => item.$add('Descuentos', req.params.descuento))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarPromodescuentos'));
        //* 19
        this.desligardescuentos = (req, res, next) => modelo_1.Promo.findById(req.params.promo)
            .then(item => item.$remove('Descuentos', req.params.descuento))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarPromodescuentos'));
        //* 20
        this.ofertas = (req, res, next) => modelo_1.Promo.findById(req.params.id)
            .then(item => item.$get('Ofertas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Promoofertas'));
        //* 20
        this.ligarofertas = (req, res, next) => modelo_1.Promo.findById(req.params.promo)
            .then(item => item.$add('Ofertas', req.params.oferta))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarPromoofertas'));
        //* 20
        this.desligarofertas = (req, res, next) => modelo_1.Promo.findById(req.params.promo)
            .then(item => item.$remove('Ofertas', req.params.oferta))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarPromoofertas'));
        //* 32
        this.transacciones = (req, res, next) => modelo_1.Promo.findById(req.params.id)
            .then(item => item.$get('Transacciones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Promotransacciones'));
        //* 32
        this.ligartransacciones = (req, res, next) => modelo_1.Promo.findById(req.params.promo)
            .then(item => item.$add('Transacciones', req.params.transaccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarPromotransacciones'));
        //* 32
        this.desligartransacciones = (req, res, next) => modelo_1.Promo.findById(req.params.promo)
            .then(item => item.$remove('Transacciones', req.params.transaccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarPromotransacciones'));
        //* 18
        this.productos = (req, res, next) => modelo_1.Promo.findById(req.params.id)
            .then(item => item.$get('Productos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'PromoProductos'));
        //* 18
        this.ligarproductos = (req, res, next) => modelo_1.Promo.findById(req.params.promo)
            .then(item => item.$add('Productos', req.params.producto, { through: req.body ? req.body : null }))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarPromoProductos'));
        //* 18
        this.desligarproductos = (req, res, next) => modelo_1.Promo.findById(req.params.promo)
            .then(item => item.$remove('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarPromoProductos'));
        this.verificarProducto = (req, res, next) => verificarProducto(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Promo_verificarProducto'));
    }
}
exports.PromoController = PromoController;

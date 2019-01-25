"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class MargenController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Margen.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearMargen'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Margen.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarMargen'))
            :
                modelo_1.Margen.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarMargen'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Margen.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarMargen'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Margen.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarMargen'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Margen.findAndCountAll({
            order: req.body.order,
            where: req.body.where
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionMargen'));
        //* 1
        this.productos = (req, res, next) => modelo_1.Margen.findById(req.params.id)
            .then(item => item.$get('Productos'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Margenproductos'));
        //* 1
        this.ligarproductos = (req, res, next) => modelo_1.Margen.findById(req.params.margen)
            .then(item => item.$add('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarMargenproductos'));
        //* 1
        this.desligarproductos = (req, res, next) => modelo_1.Margen.findById(req.params.margen)
            .then(item => item.$remove('Productos', req.params.producto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarMargenproductos'));
        //* 12
        this.xmarca = (req, res, next) => modelo_1.Margen.findAll({ where: { 'IdMarca': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xMargenmarcas'));
        //* 12
        this.marca = (req, res, next) => modelo_1.Margen.findById(req.params.id)
            .then(item => item.$get('Marca'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Margenmarcas'));
        //* 12
        this.ligarmarcas = (req, res, next) => modelo_1.Margen.findById(req.params.margen)
            .then(item => item.$set('Marca', req.params.marca))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarMargenmarcas'));
        //* 12
        this.desligarmarcas = (req, res, next) => modelo_1.Margen.findById(req.params.margen)
            .then(item => item.$remove('Marca', req.params.marca))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarMargenmarcas'));
        //* 32
        this.transacciones = (req, res, next) => modelo_1.Margen.findById(req.params.id)
            .then(item => item.$get('Transacciones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Margentransacciones'));
        //* 32
        this.ligartransacciones = (req, res, next) => modelo_1.Margen.findById(req.params.margen)
            .then(item => item.$add('Transacciones', req.params.transaccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarMargentransacciones'));
        //* 32
        this.desligartransacciones = (req, res, next) => modelo_1.Margen.findById(req.params.margen)
            .then(item => item.$remove('Transacciones', req.params.transaccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarMargentransacciones'));
    }
}
exports.MargenController = MargenController;

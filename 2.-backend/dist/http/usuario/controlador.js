"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setFavoritos = require('./setFavoritos/setFavoritos');
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class UsuarioController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Usuario.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearUsuario'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Usuario.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarUsuario'))
            :
                modelo_1.Usuario.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarUsuario'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Usuario.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarUsuario'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarUsuario'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Usuario.findAndCountAll({
            order: req.body.order,
            where: req.body.where
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionUsuario'));
        //* 25
        this.xsucursal = (req, res, next) => modelo_1.Usuario.findAll({ where: { 'IdSucursal': req.params.id } })
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'xUsuariosucursales'));
        //* 25
        this.sucursal = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(item => item.$get('Sucursal'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Usuariosucursales'));
        //* 25
        this.ligarsucursales = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$set('Sucursal', req.params.sucursal))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuariosucursales'));
        //* 25
        this.desligarsucursales = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Sucursal', req.params.sucursal))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuariosucursales'));
        //* 33
        this.ordenes = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(item => item.$get('Ordenes'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Usuarioordenes'));
        //* 33
        this.ligarordenes = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$add('Ordenes', req.params.orden))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioordenes'));
        //* 33
        this.desligarordenes = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Ordenes', req.params.orden))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioordenes'));
        //* 34
        this.llaves = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(item => item.$get('Llave'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Usuariollaves'));
        //* 34
        this.ligarllaves = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$add('Llave', req.params.llave))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuariollaves'));
        //* 34
        this.desligarllaves = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Llave', req.params.llave))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuariollaves'));
        //* 35
        this.avatares = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(item => item.$get('Avatares'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Usuarioavatares'));
        //* 35
        this.ligaravatares = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$add('Avatares', req.params.avatar))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioavatares'));
        //* 35
        this.desligaravatares = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Avatares', req.params.avatar))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioavatares'));
        //* 37
        this.logs = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(item => item.$get('Logs'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Usuariologs'));
        //* 37
        this.ligarlogs = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$add('Logs', req.params.log))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuariologs'));
        //* 37
        this.desligarlogs = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Logs', req.params.log))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuariologs'));
        //* 38
        this.acciones = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(item => item.$get('Acciones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Usuarioacciones'));
        //* 38
        this.ligaracciones = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$add('Acciones', req.params.accion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioacciones'));
        //* 38
        this.desligaracciones = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Acciones', req.params.accion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioacciones'));
        //* 39
        this.direcciones = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(item => item.$get('Direcciones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Usuariodirecciones'));
        //* 39
        this.ligardirecciones = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$add('Direcciones', req.params.direccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuariodirecciones'));
        //* 39
        this.desligardirecciones = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Direcciones', req.params.direccion))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuariodirecciones'));
        //* 40
        this.tarjetas = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(item => item.$get('Tarjetas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Usuariotarjetas'));
        //* 40
        this.ligartarjetas = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$add('Tarjetas', req.params.tarjeta))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuariotarjetas'));
        //* 40
        this.desligartarjetas = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Tarjetas', req.params.tarjeta))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuariotarjetas'));
        //* 36
        this.versiones = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(item => item.$get('Versiones'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'UsuarioVersiones'));
        //* 36
        this.ligarversiones = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$add('Versiones', req.params.version, { through: req.body ? req.body : null }))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioVersiones'));
        //* 36
        this.desligarversiones = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Versiones', req.params.version))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioVersiones'));
        this.setFavoritos = (req, res, next) => setFavoritos(req, res, next)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'Usuario_setFavoritos'));
    }
}
exports.UsuarioController = UsuarioController;

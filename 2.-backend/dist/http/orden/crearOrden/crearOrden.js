"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const modelo_1 = require("../modelo");
const modelo_2 = require("../../usuario/modelo");
const modelo_3 = require("../../transaccion/modelo");
const modelo_4 = require("../../promo/modelo");
const _ = require('lodash');
module.exports = (req, res, next) => {
    return new Promise((resolve, reject) => {
        modelo_2.Usuario.findById(req.body.usuario)
            .then(usuario => Promise.all([
            usuario.$get('Versiones'),
            usuario.$get('Tarjetas', { where: { principal: 1 } }),
            usuario.$get('Direcciones', { where: { principal: 1 } }),
            usuario.$get('Sucursal')
        ]))
            .then((response) => modelo_1.Orden.create({
            IdUsuario: req.body.usuario,
            IdTarjeta: response[1][0].id,
            IdDireccion: response[2][0].id,
            IdSucursal: response[3].id,
            status: 0
        }).then(orden => Promise.all(response[0].map((version) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.all([
                version.$get('Sucursales')
                    .then((items) => Promise.all(items.map((n) => __awaiter(this, void 0, void 0, function* () { return n.Inventario.$get('Precios'); })))).then(response => _.flatten(response)),
                version.$get('Producto').then((producto) => producto.$get('Margenes')),
                version.$get('Descuentos', { include: [
                        { model: modelo_4.Promo, as: 'Promo', where: {
                                status: 1
                            } }
                    ] })
            ]).then((response) => {
                let precio = _.last(response[0]);
                let margenes = response[1].map(n => n.id);
                let descuentos = response[2].map(n => n.id);
                return modelo_3.Transaccion.create({
                    IdOrden: orden.id,
                    IdVersion: version.id,
                    IdPrecio: precio.id,
                    cantidad: version.Favorito.cantidad,
                    total: descuentos.reduce((ac, v) => {
                        return ac - (ac * (v / 100));
                    }, margenes.reduce((ac, v) => {
                        return ac + (ac * (v / 100));
                    }, precio.cantidad))
                })
                    .then((transaccion) => __awaiter(this, void 0, void 0, function* () {
                    yield Promise.all([
                        transaccion.$set('Margenes', margenes),
                        transaccion.$set('Descuentos', descuentos)
                    ]);
                    return yield transaccion;
                }));
            });
        })))
            .then(transacciones => orden.update({ total: transacciones.reduce((ac, v) => ac + v.total, 0) }))))
            .then(response => resolve(response));
    });
};

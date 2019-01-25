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
const modelo_2 = require("../../promo/modelo");
const _ = require('lodash');
module.exports = (req, res, next) => {
    return new Promise((resolve, reject) => {
        modelo_1.Version.findById(req.params.id)
            .then(version => Promise.all([
            version.$get('Sucursales')
                .then((items) => Promise.all(items.map((n) => __awaiter(this, void 0, void 0, function* () { return n.Inventario.$get('Precios'); })))).then(response => _.flatten(response)),
            version.$get('Producto').then((producto) => producto.$get('Margenes')),
            version.$get('Descuentos', { include: [
                    { model: modelo_2.Promo, as: 'Promo', where: {
                            status: 1
                        } }
                ] })
            // .then((descuentos : any) => Promise.all([
            //     descuentos.map(async (descuento) =>  descuento.$get('Promo'))
            // ]))
        ]))
            .then((response) => {
            let precio = _.last(response[0]);
            let margenes = response[1].map(n => n.cantidad);
            let descuentos = response[2].map(n => n.cantidad);
            return {
                // precio : precio,
                // margenes : margenes,
                promo: descuentos.length > 0 ? true : false,
                precioactual: descuentos.reduce((ac, v) => {
                    return ac - (ac * (v / 100));
                }, margenes.reduce((ac, v) => {
                    return ac + (ac * (v / 100));
                }, precio.cantidad))
            };
        })
            .then(response => resolve(response));
    });
};

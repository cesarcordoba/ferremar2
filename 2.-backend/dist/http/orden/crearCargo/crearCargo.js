"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isProduction = false;
var resource_name = 'https://sandbox-api.openpay.mx';
//class
var Openpay = require('openpay');
//instantiation
var openpay = new Openpay('mzbzo4aoqvcld7vl9f9s', 'sk_6d675d731d594f29ba1466f2ee379e50', [isProduction]);
openpay.setMerchantId('mzbzo4aoqvcld7vl9f9s');
openpay.setPrivateKey('sk_6d675d731d594f29ba1466f2ee379e50');
openpay.setProductionReady(false);
const modelo_1 = require("../modelo");
const modelo_2 = require("../../usuario/modelo");
const modelo_3 = require("../../tarjeta/modelo");
const _ = require('lodash');
module.exports = (req, res, next) => {
    return new Promise((resolve, reject) => {
        console.log(req.body);
        modelo_1.Orden.findById(req.body.id, {
            include: [
                { model: modelo_2.Usuario, as: 'Usuario' },
                { model: modelo_3.Tarjeta, as: 'Tarjeta' }
            ]
        })
            .then(orden => openpay.charges.create({
            'source_id': orden.Tarjeta.IdOpenpay,
            'method': 'card',
            'amount': orden.total,
            'currency': 'MXN',
            'description': 'Compra',
            'order_id': 'oid-00051',
            'device_session_id': req.body.device,
            'customer': {
                'name': orden.Usuario.nombre,
                'last_name': orden.Usuario.nombre,
                'phone_number': '4423456723',
                'email': orden.Usuario.correo
            }
        }, (error, body) => {
            console.log(error);
            console.log({
                'source_id': orden.Tarjeta.IdOpenpay,
                'method': 'card',
                'amount': orden.total,
                'currency': 'MXN',
                'description': 'Compra',
                'order_id': 'oid-00051',
                'device_session_id': req.body.device,
                'customer': {
                    'name': orden.Usuario.nombre,
                    'last_name': orden.Usuario.nombre,
                    'phone_number': '4423456723',
                    'email': orden.Usuario.correo
                }
            });
            resolve(body);
        }));
        //
        // let obj =
        //
        // console.log(req.body)
        //
    });
};

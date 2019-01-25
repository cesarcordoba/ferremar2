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
const _ = require('lodash');
module.exports = (req, res, next) => {
    return new Promise((resolve, reject) => {
        console.log(req.body.favoritos);
        modelo_1.Usuario.findById(req.body.usuario)
            .then((usuario) => __awaiter(this, void 0, void 0, function* () {
            yield usuario.$get('Versiones')
                .then((versiones) => Promise.all(versiones.map((version) => __awaiter(this, void 0, void 0, function* () { return version.$remove('Usuarios', req.body.usuario); }))));
            return yield Promise.all(req.body.favoritos.map((favorito) => __awaiter(this, void 0, void 0, function* () { return yield usuario.$add('Versiones', favorito.id, { through: { cantidad: favorito.Favorito.cantidad ? favorito.Favorito.cantidad : 1 } }); })));
        }))
            .then(response => resolve(response));
    });
};

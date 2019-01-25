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
        modelo_1.Categoria.findById(req.params.id)
            .then(response => detective(response, []))
            .then(response => response.sort(n => n.nivel))
            .then(result => resolve(result));
        function detective(categoria, array) {
            return __awaiter(this, void 0, void 0, function* () {
                return !_.isNull(categoria) ? yield categoria.$get('PreCategoria')
                    .then(response => {
                    array.push(categoria);
                    return detective(response, array);
                }) : array;
            });
        }
    });
};

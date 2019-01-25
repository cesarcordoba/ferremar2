"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const modelo_1 = require("../anuncio/modelo");
let Cartel = class Cartel extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Cartel.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Cartel.prototype, "url", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Cartel.prototype, "key", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Cartel.prototype, "tamano", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => modelo_1.Anuncio, 'IdAnuncio'),
    __metadata("design:type", modelo_1.Anuncio)
], Cartel.prototype, "Anuncio", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => modelo_1.Anuncio),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Cartel.prototype, "IdAnuncio", void 0);
Cartel = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'carteles'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Cartel);
exports.Cartel = Cartel;

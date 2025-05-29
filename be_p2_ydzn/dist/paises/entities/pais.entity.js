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
exports.Pais = void 0;
const typeorm_1 = require("typeorm");
const serie_entity_1 = require("../../series/entities/serie.entity");
let Pais = class Pais {
    id;
    descripcion;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    series;
};
exports.Pais = Pais;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pais.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 30 }),
    __metadata("design:type", String)
], Pais.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Pais.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Pais.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], Pais.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => serie_entity_1.Serie, serie => serie.pais),
    __metadata("design:type", Array)
], Pais.prototype, "series", void 0);
exports.Pais = Pais = __decorate([
    (0, typeorm_1.Entity)('paises')
], Pais);
//# sourceMappingURL=pais.entity.js.map
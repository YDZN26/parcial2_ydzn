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
exports.Serie = void 0;
const pais_entity_1 = require("../../paises/entities/pais.entity");
const typeorm_1 = require("typeorm");
let Serie = class Serie {
    id;
    idPais;
    titulo;
    sinopsis;
    director;
    temporadas;
    fechaEstreno;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    pais;
};
exports.Serie = Serie;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Serie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'id_pais' }),
    __metadata("design:type", Number)
], Serie.prototype, "idPais", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 250 }),
    __metadata("design:type", String)
], Serie.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 5000 }),
    __metadata("design:type", String)
], Serie.prototype, "sinopsis", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], Serie.prototype, "director", void 0);
__decorate([
    (0, typeorm_1.Column)('integer'),
    __metadata("design:type", Number)
], Serie.prototype, "temporadas", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_estreno' }),
    __metadata("design:type", Date)
], Serie.prototype, "fechaEstreno", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Serie.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Serie.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], Serie.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pais_entity_1.Pais, pais => pais.series),
    (0, typeorm_1.JoinColumn)({ name: 'id_pais', referencedColumnName: 'id' }),
    __metadata("design:type", pais_entity_1.Pais)
], Serie.prototype, "pais", void 0);
exports.Serie = Serie = __decorate([
    (0, typeorm_1.Entity)('series')
], Serie);
//# sourceMappingURL=serie.entity.js.map
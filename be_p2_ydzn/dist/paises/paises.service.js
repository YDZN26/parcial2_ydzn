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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaisesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pais_entity_1 = require("./entities/pais.entity");
let PaisesService = class PaisesService {
    paisRepository;
    constructor(paisRepository) {
        this.paisRepository = paisRepository;
    }
    async create(createPaisDto) {
        const pais = this.paisRepository.create(createPaisDto);
        return this.paisRepository.save(pais);
    }
    async findAll() {
        return this.paisRepository.find();
    }
    async findOne(id) {
        const pais = await this.paisRepository.findOne({ where: { id } });
        if (!pais)
            throw new common_1.NotFoundException('País no encontrado');
        return pais;
    }
    async update(id, updatePaisDto) {
        const pais = await this.paisRepository.preload({ id, ...updatePaisDto });
        if (!pais)
            throw new common_1.NotFoundException('País no encontrado');
        return this.paisRepository.save(pais);
    }
    async remove(id) {
        const pais = await this.findOne(id);
        await this.paisRepository.softRemove(pais);
    }
};
exports.PaisesService = PaisesService;
exports.PaisesService = PaisesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pais_entity_1.Pais)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaisesService);
//# sourceMappingURL=paises.service.js.map
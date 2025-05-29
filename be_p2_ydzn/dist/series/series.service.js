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
exports.SeriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const serie_entity_1 = require("./entities/serie.entity");
let SeriesService = class SeriesService {
    serieRepository;
    constructor(serieRepository) {
        this.serieRepository = serieRepository;
    }
    async create(createSerieDto) {
        const serie = this.serieRepository.create(createSerieDto);
        return this.serieRepository.save(serie);
    }
    async findAll() {
        return this.serieRepository.find({ relations: ['pais'] });
    }
    async findOne(id) {
        const serie = await this.serieRepository.findOne({ where: { id }, relations: ['pais'] });
        if (!serie)
            throw new common_1.NotFoundException('Serie no encontrada');
        return serie;
    }
    async update(id, updateSerieDto) {
        const serie = await this.serieRepository.preload({ id, ...updateSerieDto });
        if (!serie)
            throw new common_1.NotFoundException('Serie no encontrada');
        return this.serieRepository.save(serie);
    }
    async remove(id) {
        const serie = await this.findOne(id);
        await this.serieRepository.softRemove(serie);
    }
};
exports.SeriesService = SeriesService;
exports.SeriesService = SeriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(serie_entity_1.Serie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SeriesService);
//# sourceMappingURL=series.service.js.map
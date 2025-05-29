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
exports.SeriesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const series_service_1 = require("./series.service");
const create_serie_dto_1 = require("./dto/create-serie.dto");
const update_serie_dto_1 = require("./dto/update-serie.dto");
const serie_entity_1 = require("./entities/serie.entity");
let SeriesController = class SeriesController {
    seriesService;
    constructor(seriesService) {
        this.seriesService = seriesService;
    }
    create(createSerieDto) {
        return this.seriesService.create(createSerieDto);
    }
    findAll() {
        return this.seriesService.findAll();
    }
    findOne(id) {
        return this.seriesService.findOne(id);
    }
    update(id, updateSerieDto) {
        return this.seriesService.update(id, updateSerieDto);
    }
    async remove(id) {
        await this.seriesService.remove(id);
    }
};
exports.SeriesController = SeriesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Serie creada', type: serie_entity_1.Serie }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_serie_dto_1.CreateSerieDto]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de series', type: [serie_entity_1.Serie] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Serie encontrada', type: serie_entity_1.Serie }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Serie actualizada', type: serie_entity_1.Serie }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_serie_dto_1.UpdateSerieDto]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Serie eliminada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "remove", null);
exports.SeriesController = SeriesController = __decorate([
    (0, swagger_1.ApiTags)('series'),
    (0, common_1.Controller)('series'),
    __metadata("design:paramtypes", [series_service_1.SeriesService])
], SeriesController);
//# sourceMappingURL=series.controller.js.map
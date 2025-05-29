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
exports.PaisesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const paises_service_1 = require("./paises.service");
const create_pais_dto_1 = require("./dto/create-pais.dto");
const update_pais_dto_1 = require("./dto/update-pais.dto");
const pais_entity_1 = require("./entities/pais.entity");
let PaisesController = class PaisesController {
    paisesService;
    constructor(paisesService) {
        this.paisesService = paisesService;
    }
    create(createPaisDto) {
        return this.paisesService.create(createPaisDto);
    }
    findAll() {
        return this.paisesService.findAll();
    }
    findOne(id) {
        return this.paisesService.findOne(id);
    }
    update(id, updatePaisDto) {
        return this.paisesService.update(id, updatePaisDto);
    }
    async remove(id) {
        await this.paisesService.remove(id);
    }
};
exports.PaisesController = PaisesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'País creado', type: pais_entity_1.Pais }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pais_dto_1.CreatePaisDto]),
    __metadata("design:returntype", Promise)
], PaisesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de países', type: [pais_entity_1.Pais] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaisesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'País encontrado', type: pais_entity_1.Pais }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaisesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'País actualizado', type: pais_entity_1.Pais }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pais_dto_1.UpdatePaisDto]),
    __metadata("design:returntype", Promise)
], PaisesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'País eliminado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaisesController.prototype, "remove", null);
exports.PaisesController = PaisesController = __decorate([
    (0, swagger_1.ApiTags)('paises'),
    (0, common_1.Controller)('paises'),
    __metadata("design:paramtypes", [paises_service_1.PaisesService])
], PaisesController);
//# sourceMappingURL=paises.controller.js.map
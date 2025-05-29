"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSerieDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_serie_dto_1 = require("./create-serie.dto");
class UpdateSerieDto extends (0, swagger_1.PartialType)(create_serie_dto_1.CreateSerieDto) {
}
exports.UpdateSerieDto = UpdateSerieDto;
//# sourceMappingURL=update-serie.dto.js.map
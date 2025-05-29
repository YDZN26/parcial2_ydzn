"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaisDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_pais_dto_1 = require("./create-pais.dto");
class UpdatePaisDto extends (0, swagger_1.PartialType)(create_pais_dto_1.CreatePaisDto) {
}
exports.UpdatePaisDto = UpdatePaisDto;
//# sourceMappingURL=update-pais.dto.js.map
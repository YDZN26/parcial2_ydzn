"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Parcial 2 - API')
        .setDescription('API para la gestión de series y paises')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    const port = 3000;
    await app.listen(port);
    const url = await app.getUrl();
    console.log(`\n  Backend corriendo en: ${url}`);
    console.log(`Swagger disponible en: ${url}/api\n`);
}
bootstrap();
//# sourceMappingURL=main.js.map
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Parcial 2 - API')
    .setDescription('API para la gestión de series y paises')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  const port = 3000;
  await app.listen(port);

  const url = await app.getUrl();
  console.log(`\n  Backend corriendo en: ${url}`);
  console.log(`Swagger disponible en: ${url}/api\n`);
}
bootstrap();

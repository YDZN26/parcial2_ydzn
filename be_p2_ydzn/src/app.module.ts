import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeriesModule } from './series/series.module';
import { PaisesModule } from './paises/paises.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/entities/*.{ts,js}'], 
      autoLoadEntities: true,
      synchronize: true, 
    }),
    SeriesModule,
    PaisesModule,
  ],
})
export class AppModule {}

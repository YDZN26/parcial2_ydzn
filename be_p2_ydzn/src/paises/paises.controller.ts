import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { PaisesService } from './paises.service';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { Pais } from './entities/pais.entity';

@ApiTags('paises')
@Controller('paises')
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'País creado', type: Pais })
  create(@Body() createPaisDto: CreatePaisDto): Promise<Pais> {
    return this.paisesService.create(createPaisDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de países', type: [Pais] })
  findAll(): Promise<Pais[]> {
    return this.paisesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'País encontrado', type: Pais })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Pais> {
    return this.paisesService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'País actualizado', type: Pais })
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePaisDto: UpdatePaisDto): Promise<Pais> {
    return this.paisesService.update(id, updatePaisDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'País eliminado' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.paisesService.remove(id);
  }
}

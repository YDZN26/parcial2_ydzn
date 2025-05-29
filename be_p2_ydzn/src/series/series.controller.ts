import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { SeriesService } from './series.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { Serie } from './entities/serie.entity';

@ApiTags('series')
@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Serie creada', type: Serie })
  create(@Body() createSerieDto: CreateSerieDto): Promise<Serie> {
    return this.seriesService.create(createSerieDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de series', type: [Serie] })
  findAll(): Promise<Serie[]> {
    return this.seriesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Serie encontrada', type: Serie })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Serie> {
    return this.seriesService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Serie actualizada', type: Serie })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateSerieDto: UpdateSerieDto): Promise<Serie> {
    return this.seriesService.update(id, updateSerieDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Serie eliminada' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.seriesService.remove(id);
  }
}

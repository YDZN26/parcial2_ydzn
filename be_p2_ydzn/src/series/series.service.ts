import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Serie } from './entities/serie.entity';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Serie)
    private readonly serieRepository: Repository<Serie>,
  ) {}

  async create(createSerieDto: CreateSerieDto): Promise<Serie> {
    const serie = this.serieRepository.create(createSerieDto);
    return this.serieRepository.save(serie);
  }

  async findAll(): Promise<Serie[]> {
    return this.serieRepository.find({ relations: ['pais'] });
  }

  async findOne(id: number): Promise<Serie> {
    const serie = await this.serieRepository.findOne({ where: { id }, relations: ['pais'] });
    if (!serie) throw new NotFoundException('Serie no encontrada');
    return serie;
  }

  async update(id: number, updateSerieDto: UpdateSerieDto): Promise<Serie> {
    const serie = await this.serieRepository.preload({ id, ...updateSerieDto });
    if (!serie) throw new NotFoundException('Serie no encontrada');
    return this.serieRepository.save(serie);
  }

  async remove(id: number): Promise<void> {
    const serie = await this.findOne(id);
    await this.serieRepository.softRemove(serie);
  }
}

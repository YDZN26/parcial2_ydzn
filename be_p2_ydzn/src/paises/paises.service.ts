import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pais } from './entities/pais.entity';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';

@Injectable()
export class PaisesService {
  constructor(
    @InjectRepository(Pais)
    private readonly paisRepository: Repository<Pais>,
  ) {}

  async create(createPaisDto: CreatePaisDto): Promise<Pais> {
    const pais = this.paisRepository.create(createPaisDto);
    return this.paisRepository.save(pais);
  }

  async findAll(): Promise<Pais[]> {
    return this.paisRepository.find();
  }

  async findOne(id: number): Promise<Pais> {
    const pais = await this.paisRepository.findOne({ where: { id } });
    if (!pais) throw new NotFoundException('País no encontrado');
    return pais;
  }

  async update(id: number, updatePaisDto: UpdatePaisDto): Promise<Pais> {
    const pais = await this.paisRepository.preload({ id, ...updatePaisDto });
    if (!pais) throw new NotFoundException('País no encontrado');
    return this.paisRepository.save(pais);
  }

  async remove(id: number): Promise<void> {
    const pais = await this.findOne(id);
    await this.paisRepository.softRemove(pais); 
  }
}

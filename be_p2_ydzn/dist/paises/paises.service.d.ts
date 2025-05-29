import { Repository } from 'typeorm';
import { Pais } from './entities/pais.entity';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
export declare class PaisesService {
    private readonly paisRepository;
    constructor(paisRepository: Repository<Pais>);
    create(createPaisDto: CreatePaisDto): Promise<Pais>;
    findAll(): Promise<Pais[]>;
    findOne(id: number): Promise<Pais>;
    update(id: number, updatePaisDto: UpdatePaisDto): Promise<Pais>;
    remove(id: number): Promise<void>;
}

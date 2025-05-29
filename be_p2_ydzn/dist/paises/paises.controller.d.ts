import { PaisesService } from './paises.service';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { Pais } from './entities/pais.entity';
export declare class PaisesController {
    private readonly paisesService;
    constructor(paisesService: PaisesService);
    create(createPaisDto: CreatePaisDto): Promise<Pais>;
    findAll(): Promise<Pais[]>;
    findOne(id: number): Promise<Pais>;
    update(id: number, updatePaisDto: UpdatePaisDto): Promise<Pais>;
    remove(id: number): Promise<void>;
}

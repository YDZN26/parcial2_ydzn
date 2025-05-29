import { SeriesService } from './series.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { Serie } from './entities/serie.entity';
export declare class SeriesController {
    private readonly seriesService;
    constructor(seriesService: SeriesService);
    create(createSerieDto: CreateSerieDto): Promise<Serie>;
    findAll(): Promise<Serie[]>;
    findOne(id: number): Promise<Serie>;
    update(id: number, updateSerieDto: UpdateSerieDto): Promise<Serie>;
    remove(id: number): Promise<void>;
}

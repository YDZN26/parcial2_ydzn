import { Serie } from 'src/series/entities/serie.entity';
export declare class Pais {
    id: number;
    descripcion: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    series: Serie[];
}

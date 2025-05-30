import { Pais } from 'src/paises/entities/pais.entity';
export declare class Serie {
    id: number;
    idPais: number;
    titulo: string;
    sinopsis: string;
    director: string;
    temporadas: number;
    idiomaPrincipal: string;
    fechaEstreno: Date;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    pais: Pais;
}
